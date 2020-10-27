import * as React from 'react';
import { createStore } from 'redux';

import { render, screen, fireEvent } from '../../test-utils';

import TotalAmountInput from '../../../containers/TotalAmountInput';

import {
  savingGoalPlanInitialState,
  savingGoalReducer
} from '../../../reducers/savingGoalPlan';
import { totalAmountChanged } from '../../../actions/savingGoalPlan';

describe('<TotalAmountInput />', () => {
  it('renders the connected TotalAmountInput and dispatch totalAmountChanged action when fire CurrencyInput onChange event', () => {
    const store = createStore(savingGoalReducer, savingGoalPlanInitialState);
    store.dispatch = jest.fn();
    render(<TotalAmountInput />, savingGoalPlanInitialState, store);

    const input = screen.getByTestId('currency-input');
    const inputValue = '250,000';

    fireEvent.change(input, { target: { value: inputValue } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(totalAmountChanged(inputValue));
  });
});
