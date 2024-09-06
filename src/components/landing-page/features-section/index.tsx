import Section from '@/components/shared/section';
import FeatureCard from '@/components/landing-page/features-section/FeatureCard';

import { IoLanguage } from 'react-icons/io5';
import { BiDollar } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { MdLanguage } from 'react-icons/md';
import { RiFileEditLine } from 'react-icons/ri';

const FeaturesSection = () => {
    return (
        <Section>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-12 lg:gap-24">
                <div className="md:basis-1/2 lg:basis-2/5">
                    <h2 className="text-3xl font-semibold text-amber-500">Features</h2>

                    <p className="my-6 text-justify text-lg text-white">
                        Explore the innovative features that make our subtitle app the best choice for creating,
                        editing, and managing subtitles with ease.
                    </p>
                </div>

                <div className="grid w-full grid-cols-2 gap-6 md:basis-1/2 lg:basis-3/5 xl:grid-cols-3">
                    <FeatureCard Icon={BiDollar} title="Free" description="Enjoy all features at no cost" />
                    <FeatureCard
                        Icon={MdLanguage}
                        title="Multi-Language"
                        description="Support more than 90 Languages"
                    />
                    <FeatureCard Icon={IoLanguage} title="Translate" description="Translate any Language to English" />
                    <FeatureCard
                        Icon={RiFileEditLine}
                        title="Edit"
                        description="Edit and fine-tune your subtitles easily"
                    />
                    <FeatureCard
                        Icon={FiFileText}
                        title="Multi-Format"
                        description="Download as text, srt, vtt and more"
                    />
                </div>
            </div>
        </Section>
    );
};

export default FeaturesSection;
