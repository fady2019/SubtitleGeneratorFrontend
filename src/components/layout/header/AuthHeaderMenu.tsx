import React from 'react';
import { twJoin } from 'tailwind-merge';

import Link from '@/routes/navigation/link';
import Button from '@/components/ui/button';

const LINKS = [
    { to: '/@me', label: 'Dashboard' },
    { to: '/subtitles/generate', label: 'Generate Subtitle' },
    { to: '/settings', label: 'Settings' },
];

const AuthHeaderMenu: React.FC<{ logoutHandler: () => void }> = ({ logoutHandler }) => {
    return (
        <>
            <div className={twJoin('flex overflow-hidden', 'flex-col', 'md:flex-row md:gap-1 md:rounded-3xl')}>
                {LINKS.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={({ isActive }) => twJoin('px-6 py-2', isActive ? 'bg-amber-500' : 'bg-white')}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <Button className="rounded-none md:rounded-3xl" type="button" onClick={logoutHandler}>
                Logout
            </Button>
        </>
    );
};

export default AuthHeaderMenu;
