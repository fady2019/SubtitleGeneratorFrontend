import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@/components/ui/button';
import Dropdown from '@/components/ui/dropdown';

import { TAppDispatch } from '@/store';
import { TSubtitleActionButtonProps } from '@/components/shared/subtitle/subtitle-actions/types';
import { TDropdownRef } from '@/components/ui/dropdown/types';

import { FaDownload } from 'react-icons/fa6';
import { downloadSubtitleFile } from '@/store/slices/subtitles/actions';

const SUBTITLE_FILE_TYPES = [
    { id: 'txt', label: 'TXT' },
    { id: 'srt', label: 'SRT' },
    { id: 'vtt', label: 'VTT' },
];

const SubtitleFileMenuButtonContainer: React.FC<TSubtitleActionButtonProps> = ({ id }) => {
    const subtitleFileTypesMenuRef = useRef<TDropdownRef>(null);
    const dispatch = useDispatch<TAppDispatch>();

    const handleSubtitleFileDownload = (typeId: string) => {
        dispatch(downloadSubtitleFile(id, typeId));
        subtitleFileTypesMenuRef.current?.closeMenu();
    };

    const menuController = (
        <Button className="bg-green-700 text-white" title="Download as">
            <FaDownload />
        </Button>
    );

    const menuContent = (
        <ul className="overflow-hidden rounded-lg bg-violet-950">
            {SUBTITLE_FILE_TYPES.map(({ id, label }) => {
                return (
                    <li
                        key={id}
                        className="border-b border-amber-700 font-semibold last:border-b-0 hover:bg-amber-500 hover:text-black"
                    >
                        <button className="px-8 py-2.5" onClick={handleSubtitleFileDownload.bind(null, id)}>
                            {label}
                        </button>
                    </li>
                );
            })}
        </ul>
    );

    return <Dropdown ref={subtitleFileTypesMenuRef} menuController={menuController} menuContent={menuContent} />;
};

export default SubtitleFileMenuButtonContainer;
