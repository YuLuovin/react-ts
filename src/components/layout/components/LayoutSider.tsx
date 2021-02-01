import { Layout, Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  DashboardOutlined,
  AndroidOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {
  collapsed: boolean;
}

export default function LayoutSider(props:IProps) {
  const [selectKey, setSelectKey] = useState<Array<string>>(['1']);
  /* useEffect(() => {
    const localKey = window.sessionStorage.getItem('selectKey');
    if (localKey) {
      setSelectKey(JSON.parse(localKey))
    }
  },[]) */
  const handleOnSelect = (data:any) => {
    setSelectKey(data.selectedKeys)
    window.sessionStorage.setItem('selectKey', JSON.stringify(data.selectedKeys));
  }
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed} theme="dark" className="sider-wrap">
      <div className="logo"></div>
      <Menu theme="dark" mode="inline" selectedKeys={selectKey} onSelect={handleOnSelect}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <NavLink to="/dashboard">仪表盘</NavLink>
        </Menu.Item>
        <SubMenu key="2" icon={<AndroidOutlined />} title="仅测试使用">
          {/* <Menu.Item key="2-1">
            <Link to="/mydemo/changeNumber">改变数字</Link>
          </Menu.Item>
          <Menu.Item key="2-2">
            <Link to="/mydemo/axios">商城</Link>
          </Menu.Item> */}
          <Menu.Item key="2-3">
            <Link to="/mydemo/iframeTest">语音质检系统</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
