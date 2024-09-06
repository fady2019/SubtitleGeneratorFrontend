import React from 'react';
import ReactDOM from 'react-dom';
import HashLoader from 'react-spinners/HashLoader';

import Backdrop from '@/components/ui/backdrop';

import { TSpinnerProps } from '@/components/ui/spinner/types';

const Spinner: React.FC<TSpinnerProps> = (props) => {
    const { spinner, hideBackdrop, ...restProps } = props;

    if (!spinner?.loading) {
        return null;
    }

    return (
        <>
            <Backdrop show={hideBackdrop !== true && spinner.loading} />

            {ReactDOM.createPortal(
                <div className="fixed left-1/2 top-1/2 z-[1001] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
                    <HashLoader size="100px" color="#f59e0b" {...restProps} />

                    {spinner.message && (
                        <h3 style={{ color: restProps.color || '#f59e0b' }} className="text-center text-xl">
                            {spinner.message}
                        </h3>
                    )}
                </div>,
                document.getElementById('spinner')!
            )}
        </>
    );
};

export default Spinner;
