import React from 'react';

import Completed from '@/components/shared/subtitle/subtitle-status/statuses/Completed';
import InProgress from '@/components/shared/subtitle/subtitle-status/statuses/InProgress';
import Scheduled from '@/components/shared/subtitle/subtitle-status/statuses/Scheduled';
import Canceled from '@/components/shared/subtitle/subtitle-status/statuses/Canceled';
import Failed from '@/components/shared/subtitle/subtitle-status/statuses/Failed';

import { TSubtitleStatusContainerProps } from '@/components/shared/subtitle/subtitle-status/types';

const SubtitleStatusContainer: React.FC<TSubtitleStatusContainerProps> = ({ subtitle }) => {
    let status = null;

    if (subtitle.status == 'scheduled') {
        status = <Scheduled />;
    } else if (subtitle.status == 'in_progress') {
        status = <InProgress />;
    } else if (subtitle.status == 'completed') {
        status = <Completed />;
    } else if (subtitle.status == 'canceled') {
        status = <Canceled />;
    } else if (subtitle.status == 'failed') {
        status = <Failed />;
    }

    return status && <div className="flex gap-2">{status}</div>;
};

export default SubtitleStatusContainer;
