import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { totalAmountChanged } from '../actions/savingGoalPlan';
import { SavingGoalPlanState, Dispatch } from '../types/savingGoalPlan';

import CurrencyInput from './../components/CurrencyInput';
import { LOCALE } from '../styles/global';

const TotalAmountInput = (props: Props): JSX.Element => {
  return (
    <>
      <CurrencyInput
        label="Total amount"
        defaultValue={props.totalAmountDefaultValue}
        onChange={props.totalAmountChanged}
      />
    </>
  );
};

const mapStateToProps = (state: SavingGoalPlanState) => {
  return {
    totalAmountDefaultValue: state.totalAmount.toLocaleString(LOCALE)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    totalAmountChanged: (value: string) => dispatch(totalAmountChanged(value))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(TotalAmountInput);
