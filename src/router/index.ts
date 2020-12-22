import Hello from '../containers/Hello';
import MobxTest from '../components/MobXTest';
import NoMatch from '../components/NoMatch';

type router = React.FC | React.Component

interface Route {
  path?: string;
  exact?: boolean;
  component: React.FC;
}

const routes: Array<Route> = [
  {
    path: '/',
    exact: true,
    component: Hello
  },
  {
    path: '/MobXTest',
    component: MobxTest
  },
  {
    component: NoMatch
  }
]

export default routes;
