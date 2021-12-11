export enum ActionTypes {
  BillChange = '[Bill] change',
  PercentageChange = '[Percentage] change',
  SplitIncrement = '[Split] increment',
  SplitDecrement = '[Split] decrement',
  Reset = '[Reset]'
}

type BillChangeAction = {
  type: ActionTypes.BillChange
  payload: string
}
type SplitIncrementAction = {
  type: ActionTypes.SplitIncrement

}
type PercentageChangeAction = {
  type: ActionTypes.PercentageChange
  payload: string

}
type SplitDecrementAction = {
  type: ActionTypes.SplitDecrement

}
type ResetAction = {
  type: ActionTypes.Reset

}

export type ActionsType = BillChangeAction
  | SplitIncrementAction
  | PercentageChangeAction
  | SplitDecrementAction
  | ResetAction