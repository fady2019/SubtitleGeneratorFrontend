import { useSelector } from 'react-redux';

import Section from '@/components/shared/section';
import SubtitlesTable from '@/components/shared/subtitle/subtitle-table';
import Segments from '@/components/subtitles/subtitle-in-detail/segments';

import { TAppStore } from '@/store/types';

const SubtitleInDetail = () => {
    const openedSubtitle = useSelector((store: TAppStore) => store.subtitles.openedSubtitle);

    let body = null;

    if (!openedSubtitle) {
        body = <p className="text-center text-2xl">No Subtitle Found!</p>;
    } else {
        body = (
            <>
                <SubtitlesTable subtitles={[openedSubtitle]} subtitleExcludedActions={{ open: true }} hideCountCol />
                <Segments />
            </>
        );
    }

    return (
        <Section>
            <div className="w-full">{body}</div>
        </Section>
    );
};

export default SubtitleInDetail;
