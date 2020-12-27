import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
import routes from '../../router/index';
import LayoutSider from './components/LayoutSider';
import LayoutHeader from './components/LayoutHeader';
import './index.less';
// import { Redirect } from 'react-router-dom';

const { Content } = Layout;

interface IState {
  collapsed: boolean;
}

class LayoutPage extends React.Component{
  state: IState = {
    collapsed: false,
  };

  toggle = ():void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <BrowserRouter>
        <Layout id="pages-layout">
          <LayoutSider collapsed={collapsed}/>
          <Layout className="site-layout">
            <LayoutHeader collapsed={collapsed} toggle={this.toggle}/>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {renderRoutes(routes)}
              {/* <Redirect to="/dashboard" from="/"/> */}
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default LayoutPage;