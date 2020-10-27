import * as React from 'react';

import { render, screen } from '../../test-utils';

import PlanInformationBox from '../../../containers/PlanInformationBox';

import { SavingGoalPlanState } from '../../../types/savingGoalPlan';

import { savingGoalPlanInitialState } from '../../../reducers/savingGoalPlan';

const savingGoalPlanInitialStateMoreThanOneMontlyAmount: SavingGoalPlanState = {
  ...savingGoalPlanInitialState,
  monthlyDeposits: 2
};

describe('<PlanInformationBox />', () => {
  it('renders the connected PlanInformationBox with one montlyDeposits', () => {
    render(<PlanInformationBox />);

    expect(screen.getByText(/1 monthly deposit/i)).toBeInTheDocument();
  });

  it('renders the connected PlanInformationBox with more than one montlyDeposits', () => {
    render(
      <PlanInformationBox />,
      savingGoalPlanInitialStateMoreThanOneMontlyAmount
    );

    expect(screen.getByText(/2 monthly deposits/i)).toBeInTheDocument();
  });
});
