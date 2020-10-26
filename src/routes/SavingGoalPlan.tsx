import * as React from 'react';

import { PageTitle, InputGroup } from '../styles/global';

import house from './../icons/house.svg';

import Card from './../components/Card';

const SavingGoalPlan: React.FunctionComponent = () => {
  return (
    <>
      <PageTitle>
        {"Let's plan your "}
        <strong>saving goal.</strong>
      </PageTitle>
      <Card iconImg={house} iconText="House" title="Buy a house" />
    </>
  );
};

export default SavingGoalPlan;
