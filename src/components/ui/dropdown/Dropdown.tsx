import React from 'react';

import { TDropdownProps } from '@/components/ui/dropdown/types';

const Dropdown: React.FC<TDropdownProps> = (props) => {
    const {
        menuHeight,
        menuWidth,
        menuController,
        menuContent,
        isMenuOpen,
        menuControllerRef,
        menuContentRef,
        clickHandler,
        keyDownHandler,
    } = props;

    return (
        <div className="relative" style={{ width: menuWidth, height: menuHeight }}>
            <div
                ref={menuControllerRef}
                className="w-max"
                role="button"
                tabIndex={0}
                aria-pressed="false"
                onClick={clickHandler}
                onKeyDown={keyDownHandler}
            >
                {menuController}
            </div>

            {isMenuOpen && (
                <div ref={menuContentRef} className="absolute left-1/2 z-10 mt-1.5 -translate-x-1/2 overflow-hidden">
                    {menuContent}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
