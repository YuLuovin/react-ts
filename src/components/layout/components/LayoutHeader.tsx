import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { saveUserAction } from '@/store/user/actionCreator';
// import { RouteComponentProps } from 'react-router-dom';
import store from '@/store';
const { Header } = Layout;
interface IProps {
  collapsed: boolean;
  toggle(): void;
  history: any
}
function LayoutHeader(props:IProps) {
  const exit = () => {
    store.dispatch(saveUserAction({username: '', jumpPath: ''}))
    props.history.push('/login');
  }
  return (
    <Header className="site-layout-background layout-header" style={{ padding: 0 }}>
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: props.toggle,
      })}
      <div className="operate">
        <ul>
          <li>
            <span>{store.getState().userData.username}</span>
          </li>
          <li>
            <span style={{cursor: 'pointer'}} onClick={() => exit()}>登出</span>
          </li>
        </ul>
      </div>
    </Header>
  );
}

export default LayoutHeader