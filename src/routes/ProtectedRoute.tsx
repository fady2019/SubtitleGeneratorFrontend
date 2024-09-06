import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Navigate from '@/routes/navigation/navigate';

import { TProtectedRoutes } from '@/routes/types';
import { TAppStore } from '@/store/types';

const ProtectedRoutes: React.FC<TProtectedRoutes> = (props) => {
    const { redirectTo, protectedWhen } = props;

    const isAuth = useSelector((store: TAppStore) => store.auth.isAuth);

    if ((protectedWhen === 'AUTH' && !isAuth) || (protectedWhen === 'NOT_AUTH' && isAuth)) {
        return <Outlet />;
    }

    return <Navigate to={redirectTo} relative="route" redirectAfterAuthSearchParam={isAuth ? 'redirect' : 'set'} />;
};

export default ProtectedRoutes;
