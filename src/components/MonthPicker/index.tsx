import * as React from 'react';

import { InputDiv, InputLabel, LOCALE } from '../../styles/global';

import {
  PreviousButton,
  PreviousButtonSpan,
  Content,
  MonthSpan,
  YearSpan,
  NextButton,
  NextButtonSpan
} from './styles';

export interface MonthDate {
  month: number;
  year: number;
}

type MonthPickerProps = {
  label: string;
  minDate: MonthDate;
  step?: number;
  defaultDate?: MonthDate;
  onChange: (date: MonthDate) => void;
};

const MonthPicker = ({
  label,
  minDate,
  step = 1,
  defaultDate = minDate,
  onChange
}: MonthPickerProps): JSX.Element => {
  const [date, setDate] = React.useState(defaultDate);

  const getMonthFormattedValue = () => {
    const dateFull = new Date(date.year, date.month - 1, 1);
    return dateFull.toLocaleString(LOCALE, {
      month: 'long'
    });
  };

  const handleChange = (value: number) => {
    const dateFull = new Date(date.year, date.month - 1 + value * step, 1);

    const minDateFull = new Date(minDate.year, minDate.month - 1, 1);

    if (value >= 0 || dateFull >= minDateFull) {
      const newDate = {
        month: dateFull.getMonth() + 1,
        year: dateFull.getFullYear()
      };
      setDate(newDate);
      onChange(newDate);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.currentTarget as Document).activeElement.localName !== 'input') {
      if (event.key === 'ArrowRight') {
        handleChange(1);
      } else if (event.key === 'ArrowLeft') {
        handleChange(-1);
      }
    }
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    document.addEventListener('keydown', handleKeyDown, { once: true });
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <>
      <InputDiv>
        <InputLabel>{label}</InputLabel>
        <PreviousButton
          aria-label="Previous month"
          onClick={() => handleChange(-1)}
        >
          <PreviousButtonSpan />
        </PreviousButton>
        <Content>
          <MonthSpan>{getMonthFormattedValue()}</MonthSpan>
          <YearSpan>{date.year}</YearSpan>
        </Content>
        <NextButton aria-label="Next month" onClick={() => handleChange(1)}>
          <NextButtonSpan />
        </NextButton>
      </InputDiv>
    </>
  );
};

export default MonthPicker;
