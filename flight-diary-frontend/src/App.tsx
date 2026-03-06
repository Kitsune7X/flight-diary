import axios from 'axios';
import { useEffect, useState } from 'react';
import * as z from 'zod';
import DiaryEntry from './components/DiaryEntry';
import NewDiaryForm from './components/NewDiaryForm';
import NotificationComponent from './components/Notification';
import TypographyH2 from './components/TypographyH2';
import { Separator } from './components/ui/separator';
import { useNotification } from './hooks/useNotification';
import diaryServices from './services/diaryServices';
import type { Diary, NewDiaryEntry } from './types';
import { NewDiaryEntrySchema } from './types';
import { format } from 'date-fns';

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  // Since it's a diary, default to current day
  const [date, setDate] = useState<Date>(new Date());
  const [visibility, setVisibility] = useState<string>('good');
  const [weather, setWeather] = useState<string>('sunny');
  const [comment, setComment] = useState('');

  const { notification, handleNotification } = useNotification();

  useEffect(() => {
    (async () => {
      const diaries = await diaryServices.getAllDiaries();
      setDiaries(diaries);
    })();
  }, []);

  const addDiary = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Handle validation in Frontend
    const parsedDiaryEntry = (() => {
      try {
        const dateISOString = format(date, 'yyyy-MM-dd');
        const newDiary: NewDiaryEntry = NewDiaryEntrySchema.parse({
          date: dateISOString,
          visibility,
          weather,
          comment,
        });

        return newDiary;
      } catch (error: unknown) {
        if (error instanceof z.ZodError) {
          error.issues.forEach((e) => handleNotification({ message: e.message, kind: 'destructive' }));
        }
      }
    })();

    // Handle validation in backend
    if (typeof parsedDiaryEntry !== 'undefined') {
      try {
        const addedDiary = await diaryServices.createDiaryEntry(parsedDiaryEntry);

        setDiaries([...diaries, addedDiary]);
        handleNotification({
          message: `Entry on ${addedDiary.date} added`,
          kind: 'basic',
        });

        setDate(new Date());
        setVisibility('good');
        setWeather('');
        setComment('');
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // The `response.data.error` is an `.issue` array from ZodError
          error.response?.data.error.forEach((e: unknown) => {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
              handleNotification({ message: e.message, kind: 'destructive' });
            }
          });
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="w-3/6 flex flex-col gap-4">
      <h1 className="text-5xl font-bold pt-7 pb-7">FLIGHT DIARY</h1>
      <Separator />

      {notification && <NotificationComponent n={notification} />}

      <NewDiaryForm
        addDiary={addDiary}
        date={date}
        visibility={visibility}
        weather={weather}
        comment={comment}
        setDate={setDate}
        setVisibility={setVisibility}
        setWeather={setWeather}
        setComment={setComment}
      />
      <Separator />
      <TypographyH2>Diary Entries</TypographyH2>
      {diaries.map((data) => (
        <DiaryEntry key={data.id} data={data} />
      ))}
    </div>
  );
};

export default App;
