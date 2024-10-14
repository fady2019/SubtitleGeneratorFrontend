import React from 'react';

import { TDropdownProps } from '@/components/ui/dropdown/types';
import { twMerge } from 'tailwind-merge';

const Dropdown: React.FC<TDropdownProps> = (props) => {
    const {
        menuController,
        menuContent,
        menuContentContainerAttributes,
        isMenuOpen,
        menuControllerContainerRef,
        menuContentContainerRef,
        clickHandler,
        keyDownHandler,
    } = props;

    const { className: menuContentClassName, ...menuContentRestAttributes } = menuContentContainerAttributes || {};

    return (
        <div className="relative">
            <div
                ref={menuControllerContainerRef}
                className="flex items-center justify-center"
                role="button"
                tabIndex={0}
                aria-pressed="false"
                onClick={clickHandler}
                onKeyDown={keyDownHandler}
            >
                {menuController}
            </div>

            {isMenuOpen && (
                <div
                    ref={menuContentContainerRef}
                    className={twMerge(
                        'absolute left-1/2 z-10 mt-1.5 -translate-x-1/2 overflow-hidden',
                        menuContentClassName
                    )}
                    {...menuContentRestAttributes}
                >
                    {menuContent}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
