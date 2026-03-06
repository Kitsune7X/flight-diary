import { Field, FieldContent, FieldLabel, FieldTitle, FieldGroup } from './ui/field';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import type { RadioSelectProps } from '@/types';

const RadioSelect = ({
  children,
  title,
  value,
  setValue,
  option1,
  option2,
  option3,
  option4,
  option5,
}: RadioSelectProps) => {
  const capitalize = (str: string): string => str.at(0)?.toUpperCase().concat(str.slice(1)) ?? str;

  return (
    <>
      <RadioGroup value={value} onValueChange={setValue}>
        <FieldTitle>
          {children}
          {title}
          <span className="text-destructive">*</span>
        </FieldTitle>
        <FieldGroup className="@container/field-group grid grid-cols-5">
          <Field orientation="horizontal">
            <RadioGroupItem value={option1} id={option1} />
            <FieldContent>
              <FieldLabel htmlFor={option1}>{capitalize(option1)}</FieldLabel>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value={option2} id={option2} />
            <FieldContent>
              <FieldLabel htmlFor={option2}>{capitalize(option2)}</FieldLabel>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value={option3} id={option3} />
            <FieldContent>
              <FieldLabel htmlFor={option3}>{capitalize(option3)}</FieldLabel>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value={option4} id={option4} />
            <FieldContent>
              <FieldLabel htmlFor={option4}>{capitalize(option4)}</FieldLabel>
            </FieldContent>
          </Field>

          {option5 && (
            <Field orientation="horizontal">
              <RadioGroupItem value={option5} id={option5} />
              <FieldContent>
                <FieldLabel htmlFor={option5}>{capitalize(option5)}</FieldLabel>
              </FieldContent>
            </Field>
          )}
        </FieldGroup>
      </RadioGroup>
    </>
  );
};

export default RadioSelect;
