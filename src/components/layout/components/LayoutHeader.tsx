import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
const { Header } = Layout;
interface IProps {
  collapsed: boolean;
  toggle(): void
}
export default function LayoutHeader(props:IProps) {
  const exit = () => {
    console.log("退出菜单")
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
            <span>雨落</span>
          </li>
          <li>
            <span style={{cursor: 'pointer'}} onClick={() => exit()}>登出</span>
          </li>
        </ul>
      </div>
    </Header>
  );
}