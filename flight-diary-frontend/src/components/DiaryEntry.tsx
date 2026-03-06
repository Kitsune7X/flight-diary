import type { Diary } from '@/types';
import { Item, ItemContent, ItemMedia, ItemTitle, ItemDescription } from './ui/item';
import { CalendarDays } from 'lucide-react';

const DiaryEntry = ({ data }: { data: Diary }) => {
  return (
    <>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <CalendarDays />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-base">{data.date}</ItemTitle>
          <ItemDescription>Visibility: {data.visibility}</ItemDescription>
          <ItemDescription>Weather: {data.weather}</ItemDescription>
          <ItemDescription className="italic">"{data.comment}"</ItemDescription>
        </ItemContent>
      </Item>
    </>
  );
};

export default DiaryEntry;
