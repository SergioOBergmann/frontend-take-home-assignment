import {
  savingGoalReducer,
  savingGoalPlanInitialState
} from '../../src/reducers/savingGoalPlan';
import * as types from './../../src/types/savingGoalPlan';

import produce from 'immer';

const now = new Date();
const invalidDate = {
  month: now.getMonth() - 1,
  year: now.getFullYear()
};

const validDate = {
  month: savingGoalPlanInitialState.reachGoalBy.month - 1,
  year: savingGoalPlanInitialState.reachGoalBy.year + 1
};

describe('savingGoal reducer', () => {
  it('should return the initial state', () => {
    expect(
      savingGoalReducer(undefined, {} as types.SavingGoalPlanAction)
    ).toEqual(savingGoalPlanInitialState);
  });

  describe('should handle REACH_GOAL_BY_MONTH_CHANGED', () => {
    it('with an invalid month', () => {
      expect(
        savingGoalReducer(savingGoalPlanInitialState, {
          type: types.REACH_GOAL_BY_MONTH_CHANGED,
          payload: invalidDate
        })
      ).toEqual(savingGoalPlanInitialState);
    });

    it('with a valid month', () => {
      expect(
        savingGoalReducer(savingGoalPlanInitialState, {
          type: types.REACH_GOAL_BY_MONTH_CHANGED,
          payload: validDate
        })
      ).toEqual(
        produce(savingGoalPlanInitialState, nextState => {
          nextState.reachGoalBy = validDate;
          nextState.monthlyDeposits = 12;
          nextState.monthlyAmount = Math.round(
            nextState.totalAmount / nextState.monthlyDeposits
          );
        })
      );
    });
  });

  it('should handle TOTAL_AMOUNT_CHANGED', () => {
    expect(
      savingGoalReducer(savingGoalPlanInitialState, {
        type: types.TOTAL_AMOUNT_CHANGED,
        payload: '250,000'
      })
    ).toEqual(
      produce(savingGoalPlanInitialState, nextState => {
        nextState.totalAmount = 250000;
        nextState.monthlyAmount = 250000;
      })
    );
  });
});
