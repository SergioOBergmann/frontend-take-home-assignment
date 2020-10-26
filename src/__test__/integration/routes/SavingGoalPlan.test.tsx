import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import SavingGoalPlan from './../../../routes/SavingGoalPlan';

let documentBody: RenderResult;

describe('<SavingGoalPlan />', () => {
  beforeEach(() => {
    documentBody = render(<SavingGoalPlan />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
