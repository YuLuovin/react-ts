import Dashboard from '@pages/dashboard';
import RouteWrap from '@components/RouteWrap';
import NoMatch from '../components/NoMatch';
import ChangeNumber from '../pages/mydemo/changeNumber';
import ShopPage from '../pages/mydemo/shop';
import Login from '@pages/login';

interface Route {
  path?: string;
  exact?: boolean;
  component: any;
  title?: string,
  routes?: Array<Route>
}

const routes: Array<Route> = [
  {
    path: '/',
    component: RouteWrap,
    routes: [
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
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
    ]
  },
  {
    path: 'login',
    component: Login
  },
  {
    component: NoMatch
  }
]

export default routes;
