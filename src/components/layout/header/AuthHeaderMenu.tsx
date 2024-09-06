import React from 'react';

import Link from '@/routes/navigation/link';
import Button from '@/components/ui/button';
import { twJoin } from 'tailwind-merge';

const LINKS = [
    { to: '/@me', label: 'Dashboard' },
    { to: '/subtitles/generate', label: 'Generate Subtitle' },
    { to: '/settings', label: 'Settings' },
];

const AuthHeaderMenu: React.FC<{ logoutHandler: () => void }> = ({ logoutHandler }) => {
    return (
        <>
            <div className="flex overflow-hidden rounded-3xl bg-white">
                {LINKS.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            twJoin(
                                'border-r-2 border-r-violet-950 px-6 py-2 last-of-type:border-r-0',
                                isActive ? 'bg-amber-500' : ''
                            )
                        }
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <Button type="button" onClick={logoutHandler}>
                Logout
            </Button>
        </>
    );
};

export default AuthHeaderMenu;
