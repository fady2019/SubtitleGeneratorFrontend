import Section from '@/components/shared/section';
import Button from '@/components/ui/button';

const DashboardContainer = () => {
    return (
        <Section className="items-start">
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
                    <Button>Generate Subtitle</Button>
                </div>

                <div>Subtitles</div>
            </div>
        </Section>
    );
};

export default DashboardContainer;
