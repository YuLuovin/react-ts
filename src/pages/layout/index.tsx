import React from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Layout, Menu } from 'antd';
import routes from '../../router/index';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header, Sider, Content } = Layout;

class LayoutPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout id="pages-layout">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">Ant Design</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to="/dashboard">第一选项</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/MobXTest">第二选项</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {renderRoutes(routes)}
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default LayoutPage;