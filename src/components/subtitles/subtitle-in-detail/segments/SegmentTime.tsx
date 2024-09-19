import React from 'react';

import { TSegmentTimeProps } from '@/components/subtitles/subtitle-in-detail/segments/types';

const SegmentTime: React.FC<TSegmentTimeProps> = ({ timeInSec }) => {
    const hrs = Math.floor(timeInSec / 3600);
    const rem = timeInSec % 3600;
    const mins = Math.floor(rem / 60);
    const secs = rem % 60;
    const millisecs = Math.floor((secs % 1) * 1000);

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(Math.floor(secs)).padStart(2, '0')},${String(millisecs).padStart(3, '0')}`;
};

export default SegmentTime;
