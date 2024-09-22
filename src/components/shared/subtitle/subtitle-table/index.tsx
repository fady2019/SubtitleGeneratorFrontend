import React from 'react';

import SubtitleTable from '@/components/shared/subtitle/subtitle-table/SubtitleTable';
import SubtitleTitle from '@/components/shared/subtitle/subtitle-title';
import SubtitleStatus from '@/components/shared/subtitle/subtitle-status';
import SubtitleLanguage from '@/components/shared/subtitle/subtitle-language';
import SubtitleDate from '@/components/shared/subtitle/subtitle-date';
import SubtitleActions from '@/components/shared/subtitle/subtitle-actions';

import { TSubtitleTableContainerProps } from '@/components/shared/subtitle/subtitle-table/types';

const SubtitleTableContainer: React.FC<TSubtitleTableContainerProps> = (props) => {
    const { subtitles, subtitleExcludedActions, hideCountCol } = props;

    if (!subtitles.length) {
        return <p className="text-center text-2xl">No Subtitles Found!</p>;
    }

    const subtitleDataTableTitles = {
        title: 'Title',
        status: 'Status',
        language: 'Language',
        translate: 'Translated',
        created_at: 'Creation Date',
        start_date: 'Start Date',
        finish_date: 'Finish Date',
    };

    const subtitleDataTableBody = subtitles.map((subtitle) => ({
        ...subtitle,
        language: <SubtitleLanguage languageAbbreviation={subtitle.language} />,
        translate: subtitle.translate ? 'Yes' : 'No',
        title: <SubtitleTitle subtitle={subtitle} />,
        status: <SubtitleStatus subtitle={subtitle} />,
        created_at: <SubtitleDate date={subtitle.created_at} />,
        start_date: <SubtitleDate date={subtitle.start_date} />,
        finish_date: <SubtitleDate date={subtitle.finish_date} />,
    }));

    const subtitleActionsTableTitles = {
        actions: 'Actions',
    };

    const subtitleActionsTableBody = subtitles.map((subtitle) => ({
        id: subtitle.id,
        actions: <SubtitleActions subtitle={subtitle} excludedButtons={subtitleExcludedActions} />,
    }));

    return (
        <SubtitleTable
            subtitleActionsTableBody={subtitleActionsTableBody}
            subtitleActionsTableTitles={subtitleActionsTableTitles}
            subtitleDataTableBody={subtitleDataTableBody}
            subtitleDataTableTitles={subtitleDataTableTitles}
            hideCountCol={hideCountCol}
        />
    );
};

export default SubtitleTableContainer;
