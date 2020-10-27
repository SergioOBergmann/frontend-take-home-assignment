import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SavingGoalPlanState } from '../types/savingGoalPlan';

import InformationBox from './../components/InformationBox';
import { LOCALE } from '../styles/global';

const PlanInformationBox = (props: Props): JSX.Element => {
  const getPrimaryMessageValue = (): string => {
    const formattedvalue = props.monthlyAmount.toLocaleString(LOCALE);
    return `$${formattedvalue}`;
  };

  const getSecondaryMessage = (): JSX.Element => {
    const totalAmountFormattedValue = props.totalAmount.toLocaleString(LOCALE);
    const date = new Date(
      props.reachGoalBy.year,
      props.reachGoalBy.month - 1,
      1
    );
    const reachGoalByMonthFormattedValue = date.toLocaleString(LOCALE, {
      month: 'long'
    });
    let monthlyDepositComplement = 'monthly deposits';
    if (props.monthlyDeposits === 1) {
      monthlyDepositComplement = 'monthly deposit';
    }
    return (
      <>
        {"You're planning "}
        <span>
          <strong>{`${props.monthlyDeposits} ${monthlyDepositComplement}`}</strong>
        </span>
        {' to reach your '}
        <strong>{`$${totalAmountFormattedValue}`}</strong>
        {' goal by '}
        <strong>{`${reachGoalByMonthFormattedValue} ${props.reachGoalBy.year}.`}</strong>
      </>
    );
  };

  return (
    <>
      <InformationBox
        desktopPrimaryMessageLabel="Monthly amount"
        mobilePrimaryMessageLabel="Monthly"
        primaryMessageValue={getPrimaryMessageValue()}
        secondaryMessage={getSecondaryMessage()}
      />
    </>
  );
};

const mapStateToProps = (state: SavingGoalPlanState) => {
  return {
    monthlyAmount: state.monthlyAmount,
    monthlyDeposits: state.monthlyDeposits,
    totalAmount: state.totalAmount,
    reachGoalBy: state.reachGoalBy
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(PlanInformationBox);
