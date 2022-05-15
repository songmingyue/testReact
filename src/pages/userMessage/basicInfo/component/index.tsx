import React from 'react';
import styles from '../index.less';
import { Form, Input } from 'antd';

const Forms: React.FC = () => {
  return (
    <>
      <Form.Item
        label="企业名称"
        name="username"
        rules={[{ required: true, message: '请输入企业名称' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="企业logo" name="username">
        <img
          className={styles.qiyeLogo}
          src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        />
      </Form.Item>
      <Form.Item label="企业简介" name="show">
        <Input.TextArea allowClear showCount />
      </Form.Item>
      <Form.Item
        label="联系电话"
        name="password"
        rules={[{ required: false, message: '请输入企业名称' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="通讯地址" name="password">
        <Input />
      </Form.Item>
      <Form.Item label="企业官网" name="password">
        <Input />
      </Form.Item>
    </>
  );
};
export default Forms;
