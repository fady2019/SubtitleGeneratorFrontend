import Link from '@/routes/navigation/link';
import Section from '@/components/shared/section';
import Button from '@/components/ui/button';
import SubtitlesTable from '@/components/shared/subtitle/subtitle-table';
import { useSelector } from 'react-redux';

import { TAppStore } from '@/store/types';

const Dashboard = () => {
    const subtitlesObj = useSelector((store: TAppStore) => store.subtitles.subtitles);
    const subtitles = Object.values(subtitlesObj);

    return (
        <Section className="items-stretch">
            <div className="flex w-full flex-col gap-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-white">Dashboard</h2>

                    <Link to="/subtitles/generate">
                        <Button>Generate Subtitle</Button>
                    </Link>
                </div>

                <SubtitlesTable subtitles={subtitles} />
            </div>
        </Section>
    );
};

export default Dashboard;
