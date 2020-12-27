import Hello from '../containers/Hello';
import MobxTest from '../components/MobXTest';
import Third from '../pages/third';
import NoMatch from '../components/NoMatch';
import ChangeNumber from '../pages/changeNumber';
import ShopPage from '../pages/shop';

interface Route {
  path?: string;
  exact?: boolean;
  component: any;
}

const routes: Array<Route> = [
  {
    path: '/dashboard',
    component: Hello
  },
  {
    path: '/MobXTest',
    component: MobxTest
  },
  {
    path: '/third',
    component: Third
  },
  {
    path: '/changeNumber',
    component: ChangeNumber
  },
  {
    path: '/shop',
    component: ShopPage
  },
  {
    component: NoMatch
  }
]

export default routes;
