import Hello from '../containers/Hello';
import MobxTest from '../components/MobXTest';
import NoMatch from '../components/NoMatch';

const routes = [
  {
    path: '/hello',
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
