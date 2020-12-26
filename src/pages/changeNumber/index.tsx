import { Dispatch } from "react";
import { incrementNumber, addNumber, decrementNumber, subNumber, ChangeNumber } from '../../store/changeNumber/actionsCreator';
import { connect } from 'react-redux';
import { StoreState } from '../../types';

interface IProps {
  counter: number;
  handleIncrementNumber: () => void;
  handleAddNumber: (num: number) => void;
  handleDecrementNumber: () => void;
  handleSubNumber: (num: number) => void;
}

function ChangeNumberPage(props:IProps) {
  return (
    <>
      <div>
        <h2>当前数字：{ props.counter }</h2>
        <button onClick={ e => props.handleIncrementNumber() }>+1</button>
        <button onClick={ e => props.handleAddNumber(5) }>+5</button>
      </div>
      <hr/>
      <div>
        <h2>当前数字：{ props.counter }</h2>
        <button onClick={ e => props.handleDecrementNumber() }>-1</button>
        <button onClick={ e => props.handleSubNumber(5) }>-5</button>
      </div>
    </>
  );
}

function mapStateToProps(state:StoreState) {
  return {
    counter: state.changeNumber.counter
  }
}

function mapDispatchToProps(dispatch:Dispatch<ChangeNumber>) {
  return {
    handleIncrementNumber: () => dispatch(incrementNumber()),
    handleAddNumber: (num: number) => dispatch(addNumber(num)),
    handleDecrementNumber: () => dispatch(decrementNumber()),
    handleSubNumber: (num: number) => dispatch(subNumber(num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeNumberPage);