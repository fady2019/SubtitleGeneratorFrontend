import React from 'react';
import { useSelector } from 'react-redux';

import Link from '@/routes/navigation/link';
import NotAuthHeaderMenu from '@/components/layout/header/NotAuthHeaderMenu';
import AuthHeaderMenu from '@/components/layout/header/AuthHeaderMenu';

import { THeaderProps } from '@/components/layout/header/types';
import { TAppStore } from '@/store/types';

import { PiSubtitlesFill } from 'react-icons/pi';

const Header: React.FC<THeaderProps> = (props) => {
    const { logoutHandler } = props;

    const isAuth = useSelector((store: TAppStore) => store.auth.isAuth);

    return (
        <header className="absolute left-0 top-0 w-full border-b border-amber-700 bg-violet-950 py-2">
            <nav className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <PiSubtitlesFill className="text-5xl text-amber-500" />
                    <h1 className="text-3xl font-semibold text-white">CS50x</h1>
                </Link>

                <div className="flex items-center gap-4 text-black">
                    {!isAuth ? <NotAuthHeaderMenu /> : <AuthHeaderMenu logoutHandler={logoutHandler} />}
                </div>
            </nav>
        </header>
    );
};

export default Header;
