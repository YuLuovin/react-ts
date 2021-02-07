import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutSider from './components/LayoutSider';
import LayoutHeader from './components/LayoutHeader';
import { RouteWithSubRoutes } from '@/pages/App';
import { saveUserAction } from '@/store/user/actionCreator';
import './index.less';
import store from '@/store';

const { Content } = Layout;

interface IState {
  collapsed: boolean;
}

// interface IProps extends RouteConfig, RouteComponentProps {}

class LayoutPage extends React.Component<any, IState>{
  state: IState = {
    collapsed: false,
  };

  componentDidMount() {
    // 没有登录不能进入系统
    if (!store.getState().userData.jumpPath) {
      const sessionUser = window.sessionStorage.getItem('user')
      if (sessionUser) {
        store.dispatch(saveUserAction(JSON.parse(sessionUser)))
        return
      }
      this.props.history.push('/login')
    }
  }

  toggle = ():void => {
    this.setState({
      collapsed: !this.state.collapsed,
    },
    () => {
      console.log(this.state.collapsed)
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
        <Layout id="pages-layout">
          <LayoutSider collapsed={collapsed} />
          <Layout className="site-layout" style={{marginLeft: this.state.collapsed ? '80px' : '200px'}}>
            <LayoutHeader collapsed={collapsed} toggle={this.toggle} history={this.props.history}/>
            <Content
              className="site-layout-background content-wrap"
              style={{
                margin: '24px 16px',
                padding: 24
              }}
            >
              <Switch>
                {
                  this.props.routes.map((route: any, i: number) => <RouteWithSubRoutes key={i} {...route} />)
                }
              </Switch>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default withRouter(LayoutPage);