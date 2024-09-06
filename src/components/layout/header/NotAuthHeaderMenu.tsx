import Link from '@/routes/navigation/link';
import Button from '@/components/ui/button';

const NotAuthHeaderMenu = () => {
    return (
        <>
            <Button className="bg-white" type="button">
                <Link to="/auth/sign-up" keepRedirectAfterAuthSearchParam>
                    Sign up
                </Link>
            </Button>

            <Button type="button">
                <Link to="/auth/login" keepRedirectAfterAuthSearchParam>
                    Login
                </Link>
            </Button>
        </>
    );
};

export default NotAuthHeaderMenu;
