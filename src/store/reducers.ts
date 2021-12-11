import { StoreState } from './index';
// import { Action } from 'redux';
import { ActionsType, ActionTypes } from './actions';

const initialState: StoreState = {
  bill: 0,
  percentage: 0,
  split: 1,
};

export const rootReducer = (state = initialState, action: ActionsType): StoreState => {
   switch (action.type) {
     case ActionTypes.BillChange:
       return { ...state, bill: Number(action.payload) };
     case ActionTypes.SplitIncrement:
       return { ...state, split: state.split + 1 };
     case ActionTypes.PercentageChange:
       return { ...state, percentage: Number(action.payload) };
     case ActionTypes.SplitDecrement:
       const split = state.split - 1
       return { ...state, split: split > 1 ? split: state.split };
     case ActionTypes.Reset:
       return initialState
     default:
       return state;
   }
}