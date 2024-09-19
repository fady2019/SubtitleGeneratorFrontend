import SubtitleCancelButton from '@/components/shared/subtitle/subtitle-actions/buttons/subtitle-cancel-button';
import SubtitleDeleteButton from '@/components/shared/subtitle/subtitle-actions/buttons/subtitle-delete-button';
import SubtitleRegenerateButton from '@/components/shared/subtitle/subtitle-actions/buttons/subtitle-regenerate-button';
import SubtitleOpenButton from '@/components/shared/subtitle/subtitle-actions/buttons/subtitle-open-button';
import SubtitleFileMenuButton from '@/components/shared/subtitle/subtitle-actions/buttons/subtitle-file-menu-button';

import { TSubtitleRowActionContainerProps } from '@/components/shared/subtitle/subtitle-actions/types';

const SubtitleRowActionContainer: React.FC<TSubtitleRowActionContainerProps> = (props) => {
    const { subtitle, excludedButtons } = props;
    const actionButtons = [];

    if ((excludedButtons?.cancel !== true && subtitle.status === 'in_progress') || subtitle.status === 'scheduled') {
        actionButtons.push(<SubtitleCancelButton key="cancel-btn" id={subtitle.id} />);
    }

    if ((excludedButtons?.regenerate !== true && subtitle.status === 'canceled') || subtitle.status === 'failed') {
        actionButtons.push(<SubtitleRegenerateButton key="regenerate-btn" id={subtitle.id} />);
    }

    if (subtitle.status === 'completed') {
        if (excludedButtons?.fileMenu !== true) {
            actionButtons.push(<SubtitleFileMenuButton key="file-menu-btn" id={subtitle.id} />);
        }

        if (excludedButtons?.open !== true) {
            actionButtons.push(<SubtitleOpenButton key="open-btn" id={subtitle.id} />);
        }
    }

    if (excludedButtons?.delete !== true && subtitle.status !== 'in_progress' && subtitle.status !== 'scheduled') {
        actionButtons.push(<SubtitleDeleteButton key="delete-btn" id={subtitle.id} />);
    }

    return <div className="flex items-center justify-center gap-2">{actionButtons}</div>;
};

export default SubtitleRowActionContainer;
