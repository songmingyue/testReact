import { useState } from 'react';
import styles from './index.less';
import { Table, Space, Button } from 'antd';
import { confirm } from '../../components/Modal/index';
import { Modals, NewOrganization } from './component/index';

const Organization: React.FC = () => {
  const [isShowNew, setIsShowNew] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const deletes = async () => {
    await confirm({
      title: '删除',
      content: '是否要删除该用户，删除后不可找回',
      okText: '确认删除',
      cancelText: '取消',
    });
  };
  const copyTitle = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '名称',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '别称',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
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
          <a onClick={() => setIsShowNew(true)}>编辑</a>
          <a onClick={() => deletes()}>删除</a>
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
      status: '禁用',
      time: '2021-10-10',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      status: '正常',
      time: '2021-10-10',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      status: '正常',
      time: '2021-10-10',
    },
  ];
  return (
    <div>
      <div className={styles.originTitles}>
        <p>成员列表</p>
        <div className={styles.titleBtn}>
          <Button onClick={() => setIsModalVisible(true)}>邀请</Button>
          <Button type="primary" onClick={() => setIsShowNew(true)}>
            添加成员
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modals
        isModalVisible={isModalVisible}
        handleOk={() => copyTitle()}
        handleCancel={() => copyTitle()}
      />
      <NewOrganization
        isModalVisible={isShowNew}
        handleOk={() => setIsShowNew(false)}
        handleCancel={() => setIsShowNew(false)}
      />
    </div>
  );
};

export default Organization;
