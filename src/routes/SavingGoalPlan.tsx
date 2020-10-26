import * as React from 'react';

import { PageTitle, InputGroup } from '../styles/global';

import house from './../icons/house.svg';

import Card from './../components/Card';
import CurrencyInput from '../components/CurrencyInput';
import MonthPicker from '../components/MonthPicker';
import InformationBox from '../components/InformationBox';

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
          <CurrencyInput
            label="Total amount"
            defaultValue="25,000"
            onChange={handleChange}
          />
          <MonthPicker
            label="Reach goal by"
            minDate={{
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 2
            }}
            onChange={handleMonthChange}
          />
        </InputGroup>
        <InformationBox
          desktopPrimaryMessageLabel="Monthly amount"
          mobilePrimaryMessageLabel="Monthly"
          primaryMessageValue="$25,000"
          secondaryMessage={
            <span>
              You’re planning 1 monthly deposit to reach your $25,000 goal by
              November 2020.
            </span>
          }
        />
      </Card>
    </>
  );
};

export default SavingGoalPlan;
