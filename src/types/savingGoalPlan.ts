export interface SavingGoalPlanState {
  totalAmount: number;
  reachGoalBy: { month: number; year: number };
  monthlyAmount: number;
  monthlyDeposits: number;
}

export const REACH_GOAL_BY_MONTH_CHANGED = 'REACH_GOAL_BY_MONTH_CHANGED';
export const TOTAL_AMOUNT_CHANGED = 'TOTAL_AMOUNT_CHANGED';

interface ReachGoalByMonthChanged {
  type: typeof REACH_GOAL_BY_MONTH_CHANGED;
  payload: { month: number; year: number };
}

interface TotalAmountChanged {
  type: typeof TOTAL_AMOUNT_CHANGED;
  payload: string;
}

export type SavingGoalPlanAction = ReachGoalByMonthChanged | TotalAmountChanged;

export type Dispatch = (action: SavingGoalPlanAction) => void;
