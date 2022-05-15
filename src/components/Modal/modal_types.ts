import type { ModalProps } from 'antd';

export interface NormalModalProps {
  title?: string;
  content: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}

export interface InvitationProp {
  title: string;
  text?: string;
}

export type ModalCloseType = () => void;

type ContainerType = string | HTMLElement | false;
export interface ModalFactoryProp {
  visible: boolean;
  getContainer: ContainerType;
}

export type ModalViewProps = ModalProps;
