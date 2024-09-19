import React from 'react';
import { useDispatch } from 'react-redux';

import EditableText from '@/components/ui/editable-text';

import { editSubtitle } from '@/store/slices/subtitles/actions';

import { TSubtitle } from '@/types/subtitle';
import { TAppDispatch } from '@/store';

const SubtitleTitleContainer: React.FC<{ subtitle: TSubtitle }> = ({ subtitle }) => {
    const dispatch = useDispatch<TAppDispatch>();

    const editable = subtitle.status !== 'scheduled' && subtitle.status !== 'in_progress';

    const handleTitleEditing = (title: string) => {
        dispatch(editSubtitle(subtitle.id, { title }));
    };

    return <EditableText initText={subtitle.title} editable={editable} textUpdateHandler={handleTitleEditing} />;
};

export default SubtitleTitleContainer;
