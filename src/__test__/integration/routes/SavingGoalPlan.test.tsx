import * as React from 'react';
import { createStore } from 'redux';

import { render, RenderResult, fireEvent, screen } from '../../test-utils';

import SavingGoalPlan from '../../../routes/SavingGoalPlan';
import {
  savingGoalReducer,
  savingGoalPlanInitialState
} from '../../../reducers/savingGoalPlan';

let documentBody: RenderResult;
let store = createStore(savingGoalReducer, savingGoalPlanInitialState);

describe('<SavingGoalPlan />', () => {
  beforeEach(() => {
    store = createStore(savingGoalReducer, savingGoalPlanInitialState);
    store.dispatch = jest.fn();
    documentBody = render(
      <SavingGoalPlan />,
      savingGoalPlanInitialState,
      store
    );
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  describe('renders the connected SavingGoalPlan and no dispatch any action when currency input in focus and ', () => {
    it('ArrowLeft key down', () => {
      screen.getByTestId('currency-input').focus();
      fireEvent.keyDown(document, { key: 'ArrowLeft', code: 'ArrowLeft' });

      expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('ArrowRight key down', () => {
      screen.getByTestId('currency-input').focus();
      fireEvent.keyDown(document, { key: 'ArrowRight', code: 'ArrowRight' });

      expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
  });
});
