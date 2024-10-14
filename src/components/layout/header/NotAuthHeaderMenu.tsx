import Link from '@/routes/navigation/link';
import Button from '@/components/ui/button';

const NotAuthHeaderMenu = () => {
    return (
        <>
            <Button className="rounded-none bg-white p-0 md:rounded-3xl" type="button">
                <Link className="block px-4 py-2" to="/auth/sign-up" keepRedirectAfterAuthSearchParam>
                    Sign up
                </Link>
            </Button>

            <Button className="rounded-none p-0 md:rounded-3xl" type="button">
                <Link className="block px-4 py-2" to="/auth/login" keepRedirectAfterAuthSearchParam>
                    Login
                </Link>
            </Button>
        </>
    );
};

export default NotAuthHeaderMenu;
