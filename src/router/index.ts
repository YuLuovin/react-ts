import Dashboard from '@pages/dashboard';
import RouteWrap from '@components/RouteWrap';
import NoMatch from '../components/NoMatch';
import ChangeNumber from '../pages/mydemo/changeNumber';
import ShopPage from '../pages/mydemo/shop';

interface Route {
  path?: string;
  exact?: boolean;
  component: any;
  title?: string,
  routes?: Array<Route>
}

const routes: Array<Route> = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    title: '我的Demo',
    path: '/mydemo',
    component: RouteWrap,
    routes: [
      {
        path: '/mydemo/changeNumber',
        component: ChangeNumber
      },
      {
        path: '/mydemo/axios',
        component: ShopPage
      },
    ]
  },
  {
    component: NoMatch
  }
]

export default routes;
