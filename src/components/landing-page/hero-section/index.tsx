import { useSelector } from 'react-redux';

import Section from '@/components/shared/section';
import Button from '@/components/ui/button';
import Link from '@/routes/navigation/link';

import { TAppStore } from '@/store/types';

const HeroSection = () => {
    const isAuth = useSelector((store: TAppStore) => store.auth.isAuth);

    return (
        <Section>
            <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:gap-12 lg:gap-24">
                <div className="md:basis-1/2 lg:basis-2/5">
                    <h2 className="text-4xl font-bold text-amber-500 md:text-5xl">
                        Generate Subtitles Easily with CS50x
                    </h2>
                </div>

                <div className="flex flex-col items-start gap-6 md:basis-1/2 lg:basis-3/5">
                    <p className="text-justify text-lg text-white">
                        <span className="text-2xl">Welcome to CS50x Subtitle Generator!</span>

                        <span className="my-3 block">
                            Our platform is designed to simplify the process of creating accurate and professional
                            subtitles for videos and audios. Whether you're a content creator, educator, or business
                            professional, our user-friendly tool helps you enhance accessibility, reach a wider
                            audience, and boost engagement with minimal effort.
                        </span>

                        <span>
                            Sign up today and experience the seamless way to transform your content into a more
                            inclusive and engaging experience!
                        </span>
                    </p>

                    <Button>
                        {!isAuth ? <Link to="/auth/sign-up">Get Started</Link> : <Link to="/@me">Dashboard</Link>}
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;
