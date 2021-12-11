import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootType, StoreState } from '../store';
import { ActionTypes } from '../store/actions';

const TipCalculator = () => {

  const {split, percentage, bill} = useSelector<RootType, StoreState>(state => state)

  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <span>Bill: {bill * (percentage / 100)}</span>
        <input
          type='text'
          value={bill} onChange={(e) => dispatch({
          type: ActionTypes.BillChange,
          payload: e.target.value
        })}/>
      </div>
      <div>
        <span>Tip %: {bill}</span>
        <input
          type='text'
          onChange={(e) => dispatch({
            type: ActionTypes.PercentageChange,
            payload: e.target.value
          })}
          value={percentage}/>
      </div>
      <div>
        <span>Split: </span>
        <button onClick={() => dispatch({type: ActionTypes.SplitIncrement})}>+</button>
        <span>{split}</span>
        <button onClick={() => dispatch({type: ActionTypes.SplitDecrement})}>-</button>
      </div>
      <button onClick={() => dispatch({type: ActionTypes.Reset})}>RESET</button>
      <div>
        Bill total: {(bill + bill * (percentage / 100)) / split}
      </div>
      <div>Tip: {bill * (percentage / 100)}</div>
      <div>Per person: {percentage}</div>
    </div>
  );
};

export default TipCalculator;
