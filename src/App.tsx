import * as React from 'react';

import Header from './components/Header';

import SavingGoalPlan from './routes/SavingGoalPlan';

import { Root, Body } from './styles/global';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Root>
        <Header />
        <Body>
          <SavingGoalPlan />
        </Body>
      </Root>
    </>
  );
};

export default App;
