import React from 'react';
import { twMerge } from 'tailwind-merge';

const Section: React.FC<JSX.IntrinsicElements['section']> = (props) => {
    const { className, ...restProps } = props;

    return (
        <section
            className={twMerge('flex min-h-screen items-center py-12 first:pt-24 last:pb-24', className)}
            {...restProps}
        />
    );
};

export default Section;
