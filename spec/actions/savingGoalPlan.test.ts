import * as actions from './../../src/actions/savingGoalPlan';
import * as types from './../../src/types/savingGoalPlan';

describe('actions', () => {
  it('should create an action to decrement a month on Saving Goal Plan', () => {
    const date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 2
    };
    const expectedAction = {
      type: types.REACH_GOAL_BY_MONTH_CHANGED,
      payload: date
    };
    expect(actions.reachGoalByMonthChanged(date)).toEqual(expectedAction);
  });

  it('should create an action to change the total amount on Saving Goal Plan', () => {
    const totalAmountFormattedValue = '25,000';
    const expectedAction = {
      type: types.TOTAL_AMOUNT_CHANGED,
      payload: totalAmountFormattedValue
    };
    expect(actions.totalAmountChanged(totalAmountFormattedValue)).toEqual(
      expectedAction
    );
  });
});
