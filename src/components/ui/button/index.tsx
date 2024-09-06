import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TButtonProps } from '@/components/ui/button/types';

const Button: React.FC<TButtonProps> = (props) => {
    const { className, large, ...restProps } = props;
    return (
        <button
            className={twMerge(
                'select-none rounded-3xl bg-amber-500 font-semibold text-black',
                large ? 'px-6 py-3 text-lg' : 'px-4 py-2',
                className
            )}
            type="submit"
            {...restProps}
        ></button>
    );
};

export default Button;
