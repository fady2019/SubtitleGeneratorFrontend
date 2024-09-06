import React, { useEffect, useRef, useId, useCallback } from 'react';
import { toast, Id } from 'react-toastify';

import Notification from '@/components/ui/notification/Notification';

import { TNotificationContainerProps } from '@/components/ui/notification/types';

const NotificationContainer: React.FC<TNotificationContainerProps> = (props) => {
    const autoCloseSchedulerTimer = useRef<NodeJS.Timeout>();
    const toastContainerId = useId();
    const lastNotificationId = useRef<Id>();

    const { notification, onAutoClose } = props;
    const { content, type } = notification || {};

    const clearAutoCloseScheduler = useCallback(() => {
        clearInterval(autoCloseSchedulerTimer.current);
        autoCloseSchedulerTimer.current = undefined;
    }, []);

    const scheduleOnAutoClose = useCallback(() => {
        autoCloseSchedulerTimer.current = setInterval(() => {
            if (toast.isActive(lastNotificationId.current!)) {
                return;
            }

            onAutoClose();
            clearAutoCloseScheduler();
        }, 1000);
    }, [clearAutoCloseScheduler, onAutoClose]);

    useEffect(() => {
        if (!content) {
            return;
        }

        clearAutoCloseScheduler();

        toast.dismiss(lastNotificationId.current);

        lastNotificationId.current = toast(content, {
            containerId: toastContainerId,
            autoClose: 5000,
            position: 'bottom-right',
            closeOnClick: false,
            theme: 'dark',
            type: type,
            onOpen: scheduleOnAutoClose,
            onClose: clearAutoCloseScheduler,
        });
    }, [content, type, lastNotificationId, toastContainerId, clearAutoCloseScheduler, scheduleOnAutoClose]);

    return <Notification toastContainerId={toastContainerId} />;
};

export default React.memo(NotificationContainer);
