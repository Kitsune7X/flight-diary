import express, {} from 'express';
import diaryServices from '../services/diaryServices.js';
import { NewEntrySchema } from '../utils.js';
import * as z from 'zod';
const router = express.Router();
const newDiaryParser = (req, _res, next) => {
    try {
        NewEntrySchema.parse(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
};
const errorMiddleware = (error, _req, res, next) => {
    if (error instanceof z.ZodError) {
        res.status(400).send({ error: error.issues });
    }
    else {
        next(error);
    }
};
router.get('/', (_req, res) => {
    res.json(diaryServices.getEntries());
});
router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(Number(req.params.id));
    if (diary) {
        res.send(diary);
    }
    else {
        res.sendStatus(404);
    }
});
router.post('/', newDiaryParser, (req, res) => {
    const addedEntry = diaryServices.addDiary(req.body);
    res.json(addedEntry);
});
router.use(errorMiddleware);
export default router;
//# sourceMappingURL=diaries.js.map