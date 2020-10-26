import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { savingGoalReducer } from './reducers/savingGoalPlan';

const store = createStore(savingGoalReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
