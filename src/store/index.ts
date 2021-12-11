import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';



export interface StoreState {
  bill: number;
  percentage: number;
  split: number;
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type RootType = ReturnType<typeof rootReducer>
