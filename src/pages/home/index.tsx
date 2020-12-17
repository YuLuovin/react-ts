import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import Hello from '../../containers/Hello';
import MobXTest from '../../components/MobXTest';
import NoMatch from '../../components/NoMatch';
import './index.css';

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/hello" >Hello</NavLink>
        <NavLink to="/MobXTest" >MobXTest</NavLink>

        <Switch>
          <Route path="/hello" component={Hello}/>
          <Route path="/MobXTest" component={MobXTest}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}