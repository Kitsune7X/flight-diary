import type { Diary, NewDiaryEntry } from '@/types';
import axios from 'axios';

const getAllDiaries = async () => {
  const { data } = await axios.get<Diary[]>('/api/diaries');
  return data;
};

const createDiaryEntry = async (newDiary: NewDiaryEntry) => {
  const { data } = await axios.post<Diary>('/api/diaries', newDiary);
  return data;
};

export default {
  getAllDiaries,
  createDiaryEntry,
};
