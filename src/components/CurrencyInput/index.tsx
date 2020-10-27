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
  const [value, setValue] = React.useState(defaultValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let totalAmount = +event.target.value.replace(/[, ]+/g, '');
    if (
      isNaN(totalAmount) ||
      event.target.value.length >= 22 ||
      (!isNaN(totalAmount) && totalAmount < 0)
    ) {
      event.target.value = value;
    } else if (event.target.value.indexOf('.') !== -1) {
      const totalAmountText = event.target.value.replace(/[, ]+/g, '');
      const numberParts = totalAmountText.split('.');
      let fraction = numberParts[1];
      let selectionRange = 2;
      if (event.target.value.slice(0, -1) === value) {
        if (fraction.length > 2) {
          totalAmount = +totalAmountText.replace('.', '');
          totalAmount = totalAmount / 100;
        }
      } else if (fraction === '0') {
        totalAmount = +totalAmountText.replace('.', '');
        totalAmount = totalAmount / 10;
        selectionRange = 1;
      } else if (fraction.length === 1) {
        totalAmount = +totalAmountText.replace('.', '');
        totalAmount = totalAmount / 100;
      } else if (fraction.length === 2) {
        totalAmount = +totalAmountText.replace('.', '');
        totalAmount = totalAmount / 100;
      } else if (fraction.length === 0) {
        totalAmount = +totalAmountText.replace('.', '');
      } else {
        let integer = numberParts[0];
        if (integer === '') integer = '0';
        fraction = [fraction.slice(0, 2), '.', fraction.slice(2)].join('');
        fraction = Math.round(+fraction).toString();
        totalAmount = +`${integer}.${fraction}`;
      }
      event.target.value = totalAmount.toLocaleString(LOCALE, {
        minimumFractionDigits: 2
      });
      if (
        event.target.value.split('.')[1].length == 2 &&
        event.target.value.split('.')[1] === '00'
      ) {
        event.target.setSelectionRange(
          event.target.value.length - selectionRange,
          event.target.value.length
        );
      }
      setValue(event.target.value);
      onChange(event.target.value);
    } else {
      event.target.value = totalAmount.toLocaleString(LOCALE);
      setValue(event.target.value);
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
