import React from 'react';
import styles from './index.less';
import { Form, Button } from 'antd';
import Forms from './component/index';

const basicInfo: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Forms />
      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
        <span className={styles.spanTitle}>*为必填信息</span>
      </Form.Item>
    </Form>
  );
};

export default basicInfo;
