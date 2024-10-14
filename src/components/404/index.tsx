import Section from '@/components/shared/section';
import Button from '@/components/ui/button';
import Link from '@/routes/navigation/link';

const NotFoundContainer = () => {
    return (
        <Section className="flex-col justify-center gap-4 text-center">
            <h3 className="mb-2 text-4xl font-bold text-amber-500">404 - Page Not Found</h3>

            <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>

            <p className="max-w-xl">
                It looks like the page you're trying to access isn't available. It may have been moved, or the URL might
                be incorrect.
            </p>

            <Link to="/">
                <Button>Back Home</Button>
            </Link>
        </Section>
    );
};

export default NotFoundContainer;
