import React from 'react';
// import styles from '../index.less';
import { Modal, Form, Input, Select, Steps, Button } from 'antd';
import type { ModalNewRepository } from '../../pageCommonType';

export const NewRespository: React.FC<ModalNewRepository> = (props: ModalNewRepository) => {
  const { isModalVisible } = props;
  const { Step } = Steps;
  const { Option } = Select;
  const [current, setCurrent] = React.useState(0);
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
          autoComplete="off"
        >
          <Steps size="small" current={current}>
            <Step title="第一步" description="基础信息" />
            <Step title="第二部" description="入库规则设置" />
            <Step title="第三部" description="流转规则设置" />
          </Steps>
          {current === 0 && (
            <>
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
              <Form.Item label="图标" name="password">
                <img src="" />
              </Form.Item>
              <Form.Item
                label="简介"
                name="phone"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="存储"
                name="youxiang"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Button type="primary" onClick={() => setCurrent(1)}>
                下一步
              </Button>
            </>
          )}
          {current === 1 && (
            <>
              <p>入库规则设置</p>
              <Form.Item
                label="允许"
                name="otherName"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="不允许"
                name="phone"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Form.Item>
              <Button type="primary" onClick={() => setCurrent(2)}>
                下一步
              </Button>
            </>
          )}
          {current === 2 && (
            <>
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
              <Form.Item label="图标" name="password">
                <img src="" />
              </Form.Item>
              <Form.Item
                label="简介"
                name="phone"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="存储"
                name="youxiang"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Button type="primary" onClick={props.handleCancel}>
                下一步
              </Button>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
};
