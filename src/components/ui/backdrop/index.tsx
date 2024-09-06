import React from 'react';
import ReactDOM from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { TBackdropProps } from '@/components/ui/backdrop/types';

const Backdrop: React.FC<TBackdropProps> = (props) => {
    const { className, show, ...restProps } = props;

    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div
            className={twMerge('fixed left-0 top-0 z-20 h-[100dvh] w-screen opacity-80', 'bg-black', className)}
            {...restProps}
        ></div>,
        document.getElementById('backdrop')!
    );
};

export default Backdrop;
