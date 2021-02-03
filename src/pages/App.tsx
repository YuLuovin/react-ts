// import React from 'react';
import './App.less';
import routes from '@/router'
import { renderRoutes } from 'react-router-config';
import { withRouter, Route, Switch } from 'react-router-dom';
// import { Redirect, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
    </div>
  );
}

export const RouteWithSubRoutes = (route: any) => (
  <Route 
    path={route.path}
    exact={route.exact}
    render={
      props => (
        <route.component {...props} routes={route.routes ? route.routes : {}} />
      )
    }
  />
)

export default withRouter(App);
