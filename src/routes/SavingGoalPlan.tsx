import * as React from 'react';

import { PageTitle, InputGroup } from '../styles/global';

import house from './../icons/house.svg';

import Card from './../components/Card';
import MonthPicker from '../components/MonthPicker';
import TotalAmountInput from '../containers/TotalAmountInput';
import PlanInformationBox from '../containers/PlanInformationBox';

const SavingGoalPlan: React.FunctionComponent = () => {
  const handleChange = () => {
    return;
  };
  const handleMonthChange = () => {
    return;
  };
  return (
    <>
      <PageTitle>
        {"Let's plan your "}
        <strong>saving goal.</strong>
      </PageTitle>
      <Card iconImg={house} iconText="House" title="Buy a house">
        <InputGroup>
          <TotalAmountInput />
          <MonthPicker
            label="Reach goal by"
            minDate={{
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 2
            }}
            onChange={handleMonthChange}
          />
        </InputGroup>
        <PlanInformationBox />
      </Card>
    </>
  );
};

export default SavingGoalPlan;
