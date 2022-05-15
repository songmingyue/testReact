import React from 'react';
import { Form, Input } from 'antd';
import styles from '../index.less';

const Forms: React.FC = () => {
  return (
    <>
      <Form.Item label="域名设置" name="username">
        <Input />
      </Form.Item>
      <div className={styles.hostMargin}></div>
      <Form.Item label="资源库数量" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="人数限制" name="show">
        <Input />
      </Form.Item>
      <Form.Item label="空间大小" name="password">
        <Input />
      </Form.Item>
    </>
  );
};
export default Forms;
