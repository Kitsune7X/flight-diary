import express, { type NextFunction, type Response, type Request } from 'express';
import diaryServices from '../services/diaryServices.js';
import type { DiaryEntry, NewDiaryEntry } from '../types.js';
import { NewEntrySchema } from '../utils.js';
import * as z from 'zod';

const router = express.Router();

const newDiaryParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.get('/', (_req, res: Response<DiaryEntry[]>) => {
  res.json(diaryServices.getEntries());
});

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', newDiaryParser, (req: Request<unknown, unknown, NewDiaryEntry>, res: Response<DiaryEntry>) => {
  const addedEntry = diaryServices.addDiary(req.body);
  res.json(addedEntry);
});

router.use(errorMiddleware);
export default router;
