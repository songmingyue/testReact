import React from 'react';
// import styles from '../index.less';
import { Modal, Form, Input, Radio } from 'antd';
import type { ModalNewRepository } from '../../pageCommonType';

export const Modals: React.FC<ModalNewRepository> = (props: ModalNewRepository) => {
  const { isModalVisible } = props;

  return (
    <>
      <Modal
        title="邀请成员"
        visible={isModalVisible}
        onOk={props.handleOk}
        okText="复制链接"
        cancelText="重新生成"
        onCancel={props.handleCancel}
      >
        <p>邀请连接</p>
        <p>www.baidu.com</p>
      </Modal>
    </>
  );
};

export const NewOrganization: React.FC<ModalNewRepository> = (props: ModalNewRepository) => {
  const { isModalVisible } = props;
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <>
      <Modal
        title="邀请成员"
        visible={isModalVisible}
        onOk={props.handleOk}
        okText="保存"
        cancelText="取消"
        onCancel={props.handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="名称："
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="别名："
            name="otherName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码："
            name="password"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="手机："
            name="phone"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱："
            name="youxiang"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="状态："
            name="status"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Radio.Group>
              <Radio value={1}>正常</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
