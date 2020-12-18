import React from 'react';
import './App.less';
import LayoutPage from './layout'
import { withRouter } from 'react-router-dom';

function App(props:any) {
  console.log(props.history)
  return (
    <div className="App">
      <LayoutPage/>
    </div>
  );
}

export default withRouter(App);
