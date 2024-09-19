import { useDispatch } from 'react-redux';

import Button from '@/components/ui/button';

import { regenerateSubtitle } from '@/store/slices/subtitles/actions';

import { TAppDispatch } from '@/store';
import { TSubtitleActionButtonProps } from '@/components/shared/subtitle/subtitle-actions/types';

import { FaArrowRotateRight } from 'react-icons/fa6';

const SubtitleRegenerateButtonContainer: React.FC<TSubtitleActionButtonProps> = ({ id }) => {
    const dispatch = useDispatch<TAppDispatch>();

    const handleSubtitleRegeneration = () => {
        dispatch(regenerateSubtitle(id));
    };

    return (
        <Button className="bg-green-700 text-white" title="Regenerate" onClick={handleSubtitleRegeneration}>
            <FaArrowRotateRight />
        </Button>
    );
};

export default SubtitleRegenerateButtonContainer;
