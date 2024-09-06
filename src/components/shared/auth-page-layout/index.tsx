import React from 'react';

import Section from '@/components/shared/section';

import { TAuthPageLayoutContainerProps } from '@/components/shared/auth-page-layout/types';

const AuthPageLayoutContainer: React.FC<TAuthPageLayoutContainerProps> = ({ title, children }) => {
    return (
        <Section>
            <div className="mx-auto w-[30rem] max-w-full">
                {title && <h2 className="p-8 pt-0 text-center text-3xl font-semibold text-amber-500">{title}</h2>}

                {children}
            </div>
        </Section>
    );
};

export default AuthPageLayoutContainer;
