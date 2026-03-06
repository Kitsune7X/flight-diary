import React from 'react';
import * as z from 'zod';

export const NewDiaryEntrySchema = z.object({
  date: z.iso.date(),
  weather: z.literal(['sunny', 'rainy', 'cloudy', 'stormy', 'windy']),
  visibility: z.literal(['great', 'good', 'ok', 'poor']),
  comment: z.string().optional(),
});

export interface Diary extends NewDiaryEntry {
  id: number;
}

export type NewDiaryEntry = z.infer<typeof NewDiaryEntrySchema>;

export interface NewDiaryFormProps {
  addDiary: (event: React.SyntheticEvent) => void;
  date: Date;
  visibility: string;
  weather: string;
  comment?: string;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setVisibility: React.Dispatch<React.SetStateAction<string>>;
  setWeather: React.Dispatch<React.SetStateAction<string>>;
  setComment: React.Dispatch<React.SetStateAction<string>>;
}

export type DateProps = Pick<NewDiaryFormProps, 'date' | 'setDate'>;

interface NotificationBase {
  message: string;
}

interface NotificationBasic extends NotificationBase {
  kind: 'basic';
}

interface NotificationDestructive extends NotificationBase {
  kind: 'destructive';
}

export type Notification = NotificationBasic | NotificationDestructive;

export interface RadioSelectProps extends React.PropsWithChildren {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5?: string;
}
