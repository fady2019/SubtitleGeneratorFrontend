import { useDispatch } from 'react-redux';

import Button from '@/components/ui/button';

import { deleteSubtitle } from '@/store/slices/subtitles/actions';

import { TAppDispatch } from '@/store';
import { TSubtitleActionButtonProps } from '@/components/shared/subtitle/subtitle-actions/types';

import { FaTrash } from 'react-icons/fa6';

const SubtitleDeleteButtonContainer: React.FC<TSubtitleActionButtonProps> = ({ id }) => {
    const dispatch = useDispatch<TAppDispatch>();

    const handleSubtitleDeletion = () => {
        if (!window.confirm('Are you sure that you want to delete this subtitle?')) {
            return;
        }

        dispatch(deleteSubtitle(id));
    };

    return (
        <Button className="bg-rose-700 text-white" title="Delete" onClick={handleSubtitleDeletion}>
            <FaTrash />
        </Button>
    );
};

export default SubtitleDeleteButtonContainer;
