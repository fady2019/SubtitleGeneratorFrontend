import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@/components/ui/button';

import { cancelSubtitle } from '@/store/slices/subtitles/actions';

import { TAppDispatch } from '@/store';
import { TSubtitleActionButtonProps } from '@/components/shared/subtitle/subtitle-actions/types';

import { FaXmark } from 'react-icons/fa6';

const SubtitleCancelButtonContainer: React.FC<TSubtitleActionButtonProps> = ({ id }) => {
    const dispatch = useDispatch<TAppDispatch>();

    const handleSubtitleCancelation = () => {
        if (!window.confirm('Are you sure that you want to cancel generating this subtitle?')) {
            return;
        }

        dispatch(cancelSubtitle(id));
    };

    return (
        <Button className="bg-rose-700 text-white" title="Cancel" onClick={handleSubtitleCancelation}>
            <FaXmark />
        </Button>
    );
};

export default SubtitleCancelButtonContainer;
