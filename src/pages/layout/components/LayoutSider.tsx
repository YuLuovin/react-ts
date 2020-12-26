import { Layout, Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BookTwoTone
} from '@ant-design/icons';

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
}

export default function LayoutSider(props:IProps) {
  const [selectKey, setSelectKey] = useState<Array<string>>(['1']);
  useEffect(() => {
    const localKey = window.sessionStorage.getItem('selectKey');
    if (localKey) {
      setSelectKey(JSON.parse(localKey))
    }
  },[])
  const handleOnSelect = (data:any) => {
    setSelectKey(data.selectedKeys)
    window.sessionStorage.setItem('selectKey', JSON.stringify(data.selectedKeys));
  }
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed} theme="dark">
      <div className="logo"></div>
      <Menu theme="dark" mode="inline" selectedKeys={selectKey} onSelect={handleOnSelect}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to="/dashboard">第一人称</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/MobXTest">第二人称</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/third">第三人称</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BookTwoTone />}>
          <Link to="/changeNumber">改变数字</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
