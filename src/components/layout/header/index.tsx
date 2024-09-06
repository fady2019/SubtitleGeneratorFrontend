import { useDispatch } from 'react-redux';

import Header from '@/components/layout/header/Header';

import { logout } from '@/store/slices/auth/actions';

import { TAppDispatch } from '@/store';

const HeaderContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const handleLogout = () => {
        dispatch(logout());
    };

    return <Header logoutHandler={handleLogout} />;
};

export default HeaderContainer;
