import {
  SavingGoalPlanState,
  SavingGoalPlanAction,
  REACH_GOAL_BY_MONTH_CHANGED,
  TOTAL_AMOUNT_CHANGED
} from '../types/savingGoalPlan';

import produce from 'immer';

const initialDate = new Date();
initialDate.setMonth(initialDate.getMonth() + 1);

const initialTotalAmount = 25000;
export const savingGoalPlanInitialState: SavingGoalPlanState = {
  totalAmount: initialTotalAmount,
  reachGoalBy: {
    month: initialDate.getMonth() + 1,
    year: initialDate.getFullYear()
  },
  monthlyAmount: initialTotalAmount,
  monthlyDeposits: 1
};

const GetDate = (reachGoalBy: { month: number; year: number }): Date => {
  return new Date(reachGoalBy.year, reachGoalBy.month - 1, 1);
};

export function savingGoalReducer(
  state = savingGoalPlanInitialState,
  action: SavingGoalPlanAction
): SavingGoalPlanState {
  switch (action.type) {
    case REACH_GOAL_BY_MONTH_CHANGED:
      return produce(state, nextState => {
        const now = new Date();
        const date = GetDate(nextState.reachGoalBy);
        const newDate = GetDate(action.payload);
        if (newDate !== date && newDate > now) {
          nextState.reachGoalBy = action.payload;
          nextState.monthlyDeposits =
            (newDate.getFullYear() - now.getFullYear()) * 12 +
            (newDate.getMonth() - now.getMonth());
          nextState.monthlyAmount = Math.round(
            nextState.totalAmount / nextState.monthlyDeposits
          );
        }
      });
    case TOTAL_AMOUNT_CHANGED:
      return produce(state, nextState => {
        nextState.totalAmount = +action.payload.replace(/[, ]+/g, '');
        nextState.monthlyAmount = Math.round(
          nextState.totalAmount / nextState.monthlyDeposits
        );
      });
    default:
      return state;
  }
}
