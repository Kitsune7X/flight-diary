import { Field, FieldLabel, FieldSet, FieldGroup } from './ui/field';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import TypographyH2 from './TypographyH2';
import type { NewDiaryFormProps } from '@/types';
import DatePicker from './DatePicker';
import RadioSelect from './RadioSelect';
import { Smile, Cloud, NotebookPen } from 'lucide-react';

const NewDiaryForm = ({
  addDiary,
  date,
  setDate,
  visibility,
  setVisibility,
  weather,
  setWeather,
  comment,
  setComment,
}: NewDiaryFormProps) => {
  return (
    <>
      <form onSubmit={addDiary} className="max-w-md">
        <FieldSet className="pb-7">
          <TypographyH2>Add new entry</TypographyH2>
          <FieldGroup>
            <DatePicker date={date} setDate={setDate} />
            <RadioSelect
              value={visibility}
              setValue={setVisibility}
              title="Visibility"
              option1="great"
              option2="good"
              option3="ok"
              option4="poor"
            >
              <Smile />
            </RadioSelect>

            <RadioSelect
              value={weather}
              setValue={setWeather}
              title="Weather"
              option1="sunny"
              option2="rainy"
              option3="cloudy"
              option4="stormy"
              option5="windy"
            >
              <Cloud />
            </RadioSelect>

            <Field>
              <FieldLabel htmlFor="comment">
                <NotebookPen /> Comment
              </FieldLabel>
              <Textarea
                id="comment"
                placeholder="Thoughts on today weather"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></Textarea>
            </Field>
            <Button type="submit">Add</Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  );
};

export default NewDiaryForm;
