import Link from '@/routes/navigation/link';
import Button from '@/components/ui/button';

import { TSubtitleActionButtonProps } from '@/components/shared/subtitle/subtitle-actions/types';

import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const SubtitleOpenButtonContainer: React.FC<TSubtitleActionButtonProps> = ({ id }) => {
    return (
        <Link to={`/subtitles/${id}`}>
            <Button className="bg-amber-500 font-bold" title="Open">
                <FaArrowUpRightFromSquare />
            </Button>
        </Link>
    );
};

export default SubtitleOpenButtonContainer;
