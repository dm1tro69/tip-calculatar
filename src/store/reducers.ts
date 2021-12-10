import { StoreState } from './index';
import { Action } from 'redux';


const initialState: StoreState = {
  bill:0,
  percentage: 0,
  split: 1
}

export const rootReducer = (state = initialState, action: Action): StoreState => {
   switch (action.type) {
     case "":
       return {...state}
     default: return state
   }
}