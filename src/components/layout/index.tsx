import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
// import routes from '../../router/index';
import LayoutSider from './components/LayoutSider';
import LayoutHeader from './components/LayoutHeader';
import './index.less';
import { Redirect } from 'react-router';

const { Content } = Layout;

interface IState {
  collapsed: boolean;
}

// interface IProps extends RouteConfig, RouteComponentProps {}

class LayoutPage extends React.Component<any, IState>{
  state: IState = {
    collapsed: false,
  };

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
      <BrowserRouter>
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
              { renderRoutes(this.props.route.routes) }
              <Redirect to="/dashboard" from="/"/>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default withRouter(LayoutPage);