import * as React from 'react';

import {
  render,
  RenderResult,
  fireEvent,
  screen
} from '@testing-library/react';

import MonthPicker from '../../../components/MonthPicker';

let documentBody: RenderResult;

describe('<MonthPicker />', () => {
  let onChange = jest.fn();
  beforeEach(() => {
    onChange = jest.fn();
    documentBody = render(
      <MonthPicker
        label="Reach goal by"
        defaultDate={{
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 3
        }}
        minDate={{
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 2
        }}
        onChange={onChange}
      />
    );
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  describe('calls onPreviousButtonClicked prop', () => {
    it('when ArrowLeft key down', () => {
      fireEvent.keyDown(document, { key: 'ArrowLeft', code: 'ArrowLeft' });
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when PreviousButton clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: /Previous month/i }));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('calls onNextButtonClicked prop', () => {
    it('when ArrowRight key down', () => {
      fireEvent.keyDown(document, { key: 'ArrowRight', code: 'ArrowRight' });
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('when NextButton clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: /Next month/i }));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  it('no calls when any different key down and any key up', () => {
    fireEvent.keyDown(document, { key: 'ArrowUp', code: 'ArrowUp' });
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyUp(document, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyUp(document, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(onChange).not.toHaveBeenCalled();
  });
});
