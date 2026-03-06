import { format } from 'date-fns';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Field, FieldLabel } from './ui/field';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import type { DateProps } from '@/types';
import { Calendar as CalendarIcon } from 'lucide-react';

const DatePicker = ({ date, setDate }: DateProps) => {
  return (
    <Field className="w-44">
      <FieldLabel htmlFor="date-picker">
        <CalendarIcon />
        Date <span className="text-destructive">*</span>
      </FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date-picker" className="justify-start font-normal">
            {format(date, 'PPP')}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} required></Calendar>
        </PopoverContent>
      </Popover>
    </Field>
  );
};

export default DatePicker;
