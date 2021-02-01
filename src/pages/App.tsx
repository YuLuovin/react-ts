// import React from 'react';
import './App.less';
import routes from '@/router'
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
// import { Redirect, Switch } from 'react-router-dom';
// import { Redirect, Switch } from 'react-router';
function App() {
  return (
    <div className="App">
      {
        renderRoutes(routes)
      }
      {/* <Switch>
        <Redirect to={'/dashboard'}/>
      </Switch> */}
    </div>
  );
}

export default withRouter(App);
