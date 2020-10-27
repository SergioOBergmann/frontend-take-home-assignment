import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { reachGoalByMonthChanged } from '../actions/savingGoalPlan';
import { Dispatch } from '../types/savingGoalPlan';

import MonthPicker, { MonthDate } from './../components/MonthPicker';

interface ReachGoalByInputProps extends Props {
  defaultDate?: MonthDate;
}

const ReachGoalByInput = (props: ReachGoalByInputProps): JSX.Element => {
  return (
    <>
      <MonthPicker
        label="Reach goal by"
        defaultDate={props.defaultDate}
        minDate={{
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 2
        }}
        onChange={props.reachGoalByMonthChanged}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    reachGoalByMonthChanged: (date: MonthDate) =>
      dispatch(reachGoalByMonthChanged(date))
  };
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(ReachGoalByInput);
