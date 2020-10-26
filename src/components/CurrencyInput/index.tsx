import * as React from 'react';

import { Icon, IconSpan, Input } from './styles';

import { InputDiv, InputLabel, LOCALE } from '../../styles/global';

type CurrencyInputProps = {
  label: string;
  currencySymbol?: string;
  defaultValue: string;
  onChange: (value: string) => void;
};

const CurrencyInput = ({
  label,
  currencySymbol = '$',
  defaultValue,
  onChange
}: CurrencyInputProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let totalAmount = +event.target.value.replace(/[, ]+/g, '');
    if (
      isNaN(totalAmount) ||
      event.target.value.length >= 22 ||
      (!isNaN(totalAmount) && totalAmount < 0)
    ) {
      event.target.value = event.target.defaultValue;
    } else if (event.target.value.indexOf('.') !== -1) {
      const totalAmountText = event.target.value.replace(/[, ]+/g, '');
      const numberParts = totalAmountText.split('.');
      const integer = numberParts[0];
      const fraction = numberParts[1];
      if (fraction.length > 2) {
        totalAmount = +totalAmountText.replace('.', '');
        totalAmount = totalAmount / 100;
      } else if (fraction.length === 1) {
        totalAmount = +totalAmountText.replace('.', '');
        totalAmount = totalAmount / 100;
      }
      event.target.value = totalAmount.toLocaleString(LOCALE, {
        minimumFractionDigits: 2
      });

      if (
        event.target.value.split('.')[1].length == 2 &&
        event.target.value.split('.')[1] === '00'
      ) {
        event.target.setSelectionRange(
          event.target.value.length - 2,
          event.target.value.length
        );
      }
      onChange(event.target.value);
    } else {
      event.target.value = totalAmount.toLocaleString(LOCALE);
      onChange(event.target.value);
    }
  };

  return (
    <>
      <InputDiv>
        <InputLabel>{label}</InputLabel>
        <Icon>
          <IconSpan>{currencySymbol}</IconSpan>
        </Icon>
        <Input
          data-testid="currency-input"
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      </InputDiv>
    </>
  );
};

export default CurrencyInput;
