import * as React from 'react';

import {
  render,
  RenderResult,
  fireEvent,
  screen
} from '@testing-library/react';

import CurrencyInput from '../../../components/CurrencyInput';

let documentBody: RenderResult;
let input: HTMLElement;

describe('<CurrencyInput />', () => {
  let onChange = jest.fn();
  beforeEach(() => {
    onChange = jest.fn();
    documentBody = render(
      <CurrencyInput
        label="Total amount"
        defaultValue="25,000"
        onChange={onChange}
      />
    );
    input = screen.getByTestId('currency-input');
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  describe('handle change for valid values', () => {
    it('when an integer value greater than a thousand has been inputted', () => {
      fireEvent.change(input, { target: { value: '1001' } });

      expect(input).toHaveValue('1,001');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when a decimal value with 2 fraction digits has been inputted', () => {
      fireEvent.change(input, { target: { value: '1001.52' } });

      expect(input).toHaveValue('1,001.52');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when a decimal value with 1 fraction digit has been inputted', () => {
      fireEvent.change(input, { target: { value: '1001.5' } });

      expect(input).toHaveValue('100.15');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when a decimal value with 1 fraction non-significant digit has been inputted', () => {
      fireEvent.change(input, { target: { value: '1001.0' } });

      expect(input).toHaveValue('10,010.00');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when a decimal value with 3 fractions digits has been inputted', () => {
      fireEvent.change(input, { target: { value: '1001.523' } });

      expect(input).toHaveValue('10,015.23');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when a dot has been typed at the last position of the value', () => {
      fireEvent.change(input, { target: { value: '1001.' } });

      expect(input).toHaveValue('1,001.00');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('handle change for invalid integer values', () => {
    it('when a non-numeric char has been typed', () => {
      fireEvent.change(input, { target: { value: '25,000a' } });

      expect(input).toHaveValue('25,000');
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});

describe('<CurrencyInput />', () => {
  let onChange = jest.fn();
  beforeEach(() => {
    onChange = jest.fn();
    documentBody = render(
      <CurrencyInput
        label="Total amount"
        defaultValue="25,000.59"
        onChange={onChange}
      />
    );
    input = screen.getByTestId('currency-input');
  });

  it('handle change for invalid decimal values > when a non-numeric char has been typed', () => {
    fireEvent.change(input, { target: { value: '25,000.59a' } });

    expect(input).toHaveValue('25,000.59');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('handle change for invalid values > when more than one decimal separator has been typed', () => {
    fireEvent.change(input, { target: { value: '25000.59.' } });

    expect(input).toHaveValue('25,000.59');
    expect(onChange).not.toHaveBeenCalled();
  });
});
