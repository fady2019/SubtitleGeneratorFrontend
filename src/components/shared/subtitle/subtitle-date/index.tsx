import React from 'react';

import { TSubtitleDateContainerProps } from '@/components/shared/subtitle/subtitle-date/types';

const SubtitleDateContainer: React.FC<TSubtitleDateContainerProps> = ({ date }) => {
    if (!date) {
        return 'N/A';
    }

    return new Date(date).toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'medium',
    });
};

export default SubtitleDateContainer;
