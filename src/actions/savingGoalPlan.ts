import {
  REACH_GOAL_BY_MONTH_CHANGED,
  TOTAL_AMOUNT_CHANGED,
  SavingGoalPlanAction
} from '../types/savingGoalPlan';

export function reachGoalByMonthChanged(date: {
  month: number;
  year: number;
}): SavingGoalPlanAction {
  return {
    type: REACH_GOAL_BY_MONTH_CHANGED,
    payload: date
  };
}

export function totalAmountChanged(totalAmount: string): SavingGoalPlanAction {
  return {
    type: TOTAL_AMOUNT_CHANGED,
    payload: totalAmount
  };
}
