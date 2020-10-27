import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  savingGoalReducer,
  savingGoalPlanInitialState
} from '../reducers/savingGoalPlan';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

function render(
  ui: React.ReactElement,
  initialState = savingGoalPlanInitialState,
  store = createStore(savingGoalReducer, initialState),
  { ...renderOptions } = {}
) {
  function Wrapper(props: Props) {
    return <Provider store={store}>{props.children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
