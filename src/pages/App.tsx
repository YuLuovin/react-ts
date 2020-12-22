// import React from 'react';
import './App.less';
import LayoutPage from './layout'

function App(props:any) {
  console.log(props.history)
  return (
    <div className="App">
      <LayoutPage/>
    </div>
  );
}

export default App;
