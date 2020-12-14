import Hello from '../components/Hello';
import * as actions from '../actions/index';
import { StoreState } from '../types/index';
import { connect, DispatchProp } from 'react-redux';

export function mapStateToProps({ languageName, enthusiasmLevel }: StoreState) {
  return {
    name: languageName,
    enthusiasmLevel
  }
}