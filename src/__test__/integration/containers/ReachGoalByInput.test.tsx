import * as React from 'react';
import { createStore } from 'redux';

import { render, screen, fireEvent } from '../../test-utils';

import ReachGoalByInput from '../../../containers/ReachGoalByInput';

import {
  savingGoalPlanInitialState,
  savingGoalReducer
} from '../../../reducers/savingGoalPlan';
import { reachGoalByMonthChanged } from '../../../actions/savingGoalPlan';

const date = new Date(
  savingGoalPlanInitialState.reachGoalBy.year,
  savingGoalPlanInitialState.reachGoalBy.month - 1,
  1
);

const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

const dateAfterNext = new Date(
  nextDate.getFullYear(),
  nextDate.getMonth() + 1,
  1
);

const store = createStore(savingGoalReducer, savingGoalPlanInitialState);

describe('<ReachGoalByInput defaultValue={nextDate} />', () => {
  beforeEach(() => {
    store.dispatch = jest.fn();
    render(
      <ReachGoalByInput
        defaultDate={{
          month: nextDate.getMonth() + 1,
          year: nextDate.getFullYear()
        }}
      />,
      savingGoalPlanInitialState,
      store
    );
  });

  it('renders the connected ReachGoalByInput and dispatch reachGoalByChanged action on Next Button clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /Next month/i }));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      reachGoalByMonthChanged({
        month: dateAfterNext.getMonth() + 1,
        year: dateAfterNext.getFullYear()
      })
    );
  });

  it('renders the connected ReachGoalByInput and dispatch reachGoalByChanged action on Previous Button clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /Previous month/i }));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      reachGoalByMonthChanged(savingGoalPlanInitialState.reachGoalBy)
    );
  });
});

describe('<ReachGoalByInput defaultValue={date} />', () => {
  it('renders the connected ReachGoalByInput and no dispatch reachGoalByChanged action on Previous Button clicked', () => {
    store.dispatch = jest.fn();
    render(
      <ReachGoalByInput
        defaultDate={{
          month: date.getMonth() + 1,
          year: date.getFullYear()
        }}
      />,
      savingGoalPlanInitialState,
      store
    );
    fireEvent.click(screen.getByRole('button', { name: /Previous month/i }));

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
