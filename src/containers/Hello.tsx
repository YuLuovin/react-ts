import Hello from '../components/Hello';
import * as actions from '../store/enthusiasm/actionsCreator';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

export function mapStateToProps(state:StoreState) {
  return {
    name: state.enthusiasm.languageName,
    enthusiasmLevel: state.enthusiasm.enthusiasmLevel
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);