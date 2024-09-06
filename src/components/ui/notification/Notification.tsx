import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import { TNotificationProps } from '@/components/ui/notification/types';

import 'react-toastify/dist/ReactToastify.min.css';

const Notification: React.FC<TNotificationProps> = ({ toastContainerId }) => {
    return ReactDOM.createPortal(
        <ToastContainer
            containerId={toastContainerId}
            style={{ maxWidth: '100%', width: '500px', right: 0, bottom: 0, padding: '1rem' }}
            position="bottom-right"
            limit={1}
        />,
        document.getElementById('notification')!
    );
};

export default Notification;
