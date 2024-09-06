import { twMerge } from 'tailwind-merge';

import { TFeatureCardProps } from '@/components/landing-page/features-section/types';

const FeatureCard: React.FC<TFeatureCardProps> = (props) => {
    const { Icon, title, description } = props;

    return (
        <div
            className={twMerge(
                'flex shrink-0 flex-col gap-2 rounded-md p-4',
                'bg-violet-950 shadow shadow-amber-700',
                'group hover:bg-amber-500'
            )}
        >
            <Icon className="text-5xl text-white" />
            <h3 className="text-xl font-semibold text-amber-500 group-hover:text-black">{title}</h3>
            <p className="text-justify text-white">{description}</p>
        </div>
    );
};

export default FeatureCard;
