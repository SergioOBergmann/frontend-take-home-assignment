import * as React from 'react';

import { PageTitle, InputGroup } from '../styles/global';

import house from '../icons/house.svg';

import Card from '../components/Card';

import PlanInformationBox from '../containers/PlanInformationBox';
import TotalAmountInput from '../containers/TotalAmountInput';
import ReachGoalByInput from '../containers/ReachGoalByInput';

const SavingGoalPlan: React.FunctionComponent = () => {
  return (
    <>
      <PageTitle>
        {"Let's plan your "}
        <strong>saving goal.</strong>
      </PageTitle>
      <Card iconImg={house} iconText="House" title="Buy a house">
        <InputGroup>
          <TotalAmountInput />
          <ReachGoalByInput />
        </InputGroup>
        <PlanInformationBox />
      </Card>
    </>
  );
};

export default SavingGoalPlan;
