import { Form, Input, Button, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { encryptByDESModeEBC } from '@/utils/cryptojs';
import './style.less';
import { StoreState, UserState } from '@/types';
import { Dispatch } from 'redux';
import { ISaveUserAction, saveUserAction } from '@/store/user/actionCreator';
import { connect } from 'react-redux';

const LoginForm = (props: any) => {

  const defaultAddress: string = 'http://10.40.7.59/';

  const [addressValue, setAddressValue] = useState<string>(defaultAddress)

  // 开始登录
  const onFinish = (values: any) => {
    let path: string = "";
    if (values.address === "") {
      path = getFullAddress(values.inputAddress)
    } else {
      path = values.address
    }
    const key = 'SMPS-DES-ENCRYPT';
    // 添加加密
    const allPath =  path + 'login?username=' + encryptByDESModeEBC(values.username, key)
    console.log("单点全路径", allPath)
    const paramsData = {
      username: values.username,
      jumpPath: allPath
    }
    // 将用户数据存入redux
    props.onSave(paramsData)
    props.history.push('/')
  };

  const getFullAddress = (url: string): string => {
    if (url === "") return ""
    if (url.indexOf('http://') < 0 && url.indexOf('https://') < 0) {
      url = 'http://' + url;
    }

    // 处理以/结尾
    if (url.charAt(url.length - 1) !== '/') {
      url += '/'
    }

    console.log("输入地址", url)
    return url
  }

  const onRadioChange = (e: any) => {
    setAddressValue(e.target.value)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ address: defaultAddress }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item name="address" label="地址">
        <Radio.Group onChange={onRadioChange}>
          <Radio value="http://10.40.7.59/" >59</Radio>
          <Radio value="http://10.40.7.74:86/">74</Radio>
          <Radio value="">自定义</Radio>
        </Radio.Group>
      </Form.Item>
      {
        InputAddress(addressValue)
      }
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

function InputAddress(needInput: string) {
  if (!needInput) {
    return (
      <Form.Item name="inputAddress" label="">
        <Input placeholder="请输入地址" />
      </Form.Item>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<ISaveUserAction>) => {
  return {
    onSave: (data: UserState) => dispatch(saveUserAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)