import { useState } from 'react';
import styles from './index.less';
import { Table, Space, Button } from 'antd';
import { confirm } from '../../components/Modal/index';
import { NewRespository } from './component/index';

const Repository: React.FC = () => {
  const showPropsConfirm = async () => {
    await confirm({
      title: '删除',
      content: '是否要删除该用户，删除后不可找回',
      okText: '确认删除',
      cancelText: '取消',
    });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: '资源库名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '资源库别名',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '存储方式',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '创建时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={() => showPropsConfirm()}>删除</a>
          <a>创建规则</a>
          <a>流转规则</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      time: '2021-10-10',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      time: '2021-10-10',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      time: '2021-10-10',
    },
  ];
  return (
    <>
      <div className={styles.RepositoryTitles}>
        <p>资源库列表</p>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          新建资源库
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />;
      <NewRespository
        isModalVisible={isModalVisible}
        handleOk={() => setIsModalVisible(false)}
        handleCancel={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default Repository;
