import Dashboard from '@pages/dashboard';
import RouteWrap from '@components/RouteWrap';
import NoMatch from '../components/NoMatch';
import ChangeNumber from '../pages/mydemo/changeNumber';
import ShopPage from '../pages/mydemo/shop';
import Login from '@pages/login';
import IframeTest from '@/pages/mydemo/iframeTest';
import LayoutPage from '../components/layout'

interface IRoute {
  path?: string;
  exact?: boolean;
  component: any;
  title?: string;
  routes?: Array<IRoute>;
}

const routes: Array<IRoute> = [
  {
    path: '/',
    exact: true,
    component: LayoutPage,
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
          {
            path: '/mydemo/iframeTest',
            component: IframeTest
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
]

export default routes;
