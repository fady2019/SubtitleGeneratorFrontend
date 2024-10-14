import React from 'react';
import { useSelector } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import Link from '@/routes/navigation/link';
import NotAuthHeaderMenu from '@/components/layout/header/NotAuthHeaderMenu';
import AuthHeaderMenu from '@/components/layout/header/AuthHeaderMenu';
import Dropdown from '@/components/ui/dropdown';

import { THeaderProps } from '@/components/layout/header/types';
import { TAppStore } from '@/store/types';

import { PiSubtitlesFill } from 'react-icons/pi';
import { IoMenuOutline } from 'react-icons/io5';

const Header: React.FC<THeaderProps> = (props) => {
    const { logoutHandler } = props;

    const isAuth = useSelector((store: TAppStore) => store.auth.isAuth);

    const headerMenu = (
        <div
            className={twJoin(
                'flex overflow-hidden text-black',
                'min-w-36 flex-col gap-1 rounded-md bg-violet-950',
                'md:min-w-min md:flex-row md:items-center md:gap-4 md:bg-transparent'
            )}
        >
            {!isAuth ? <NotAuthHeaderMenu /> : <AuthHeaderMenu logoutHandler={logoutHandler} />}
        </div>
    );

    return (
        <header className="absolute left-0 top-0 w-full border-b border-amber-700 bg-violet-950 py-2">
            <nav className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <PiSubtitlesFill className="text-5xl text-amber-500" />
                    <h1 className="text-3xl font-semibold text-white">CS50x</h1>
                </Link>

                <div className="hidden md:block">{headerMenu}</div>
                <div className="block md:hidden">
                    <Dropdown
                        menuController={<IoMenuOutline className="text-4xl" />}
                        menuContent={headerMenu}
                        menuContentContainerAttributes={{ className: 'left-auto -right-4 translate-x-0' }}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
