import React from 'react';

import { TSettingSectionProps } from '@/components/settings/sections/types';

const SettingSection: React.FC<TSettingSectionProps> = (props) => {
    const { sectionTitle, children } = props;

    return (
        <div>
            <h3 className="p-4 text-2xl font-semibold text-amber-500">{sectionTitle}</h3>

            {children}
        </div>
    );
};

export default SettingSection;
