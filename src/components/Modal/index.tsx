import { Modal, Button } from 'antd';
import { observer, useLocalObservable } from 'mobx-react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import type {
  NormalModalProps,
  InvitationProp,
  ModalCloseType,
  ModalFactoryProp,
} from './modal_types';

export function confirm(props: NormalModalProps): Promise<boolean> {
  const { title, content, okText, cancelText, description } = props;
  return new Promise((resolve) => {
    Modal.confirm({
      maskClosable: true,
      closable: true,
      width: 420,
      className: 'biz-modal',
      title: title || '请确认',
      icon: <ExclamationCircleFilled twoToneColor="#FAAD14" />,
      content: (
        <>
          <p style={{ color: '#666', marginTop: 15 }}>{content}</p>
          {description && <p>{description}</p>}
        </>
      ),
      okText: okText || '确定',
      cancelText: cancelText || '取消',
      onOk() {
        return resolve(true);
      },
      onCancel() {
        return resolve(false);
      },
    });
  });
}

export const invitationModal = (item: InvitationProp) => (removeModal: ModalCloseType) =>
  observer((props: ModalFactoryProp) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useLocalObservable(() => ({
      text: item.text || '',
      setText: (text: string) => {
        state.text = text;
      },
      close: () => {
        removeModal();
      },
    }));
    return (
      <Modal
        {...props}
        centered
        title={item.title}
        footer={null}
        maskClosable={false}
        className="biz-modal"
        onCancel={() => state.close()}
        onOk={() => state.close()}
      >
        <div>
          <Button
            type="primary"
            onClick={() => {
              state.close();
            }}
          >
            确定
          </Button>
        </div>
      </Modal>
    );
  });
