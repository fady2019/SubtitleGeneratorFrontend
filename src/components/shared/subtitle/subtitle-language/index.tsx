import React from 'react';

import { TSubtitleLanguageContainerProps } from '@/components/shared/subtitle/subtitle-language/types';

const SubtitleLanguageContainer: React.FC<TSubtitleLanguageContainerProps> = ({ languageAbbreviation }) => {
    if (!languageAbbreviation) {
        return 'N/A';
    }

    const languageName = new Intl.DisplayNames(['en'], { type: 'language' });

    return languageName.of(languageAbbreviation);
};

export default SubtitleLanguageContainer;
