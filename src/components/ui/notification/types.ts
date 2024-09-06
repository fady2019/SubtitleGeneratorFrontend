import { Id } from 'react-toastify';

export type TNotification = {
    content: string;
    type: 'info' | 'success' | 'warning' | 'error';
};

export type TNotificationProps = { toastContainerId: Id };

export type TNotificationContainerProps = {
    notification: TNotification | null;
    onAutoClose: () => void;
};
