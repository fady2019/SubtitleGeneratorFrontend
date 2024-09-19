import React, { useState, useRef, useEffect, useImperativeHandle, useLayoutEffect } from 'react';

import Dropdown from '@/components/ui/dropdown/Dropdown';

import { TDropdownContainerProps, TDropdownRef } from '@/components/ui/dropdown/types';

const DropdownContainer = React.forwardRef<TDropdownRef, TDropdownContainerProps>((props, ref) => {
    const { menuController, menuContent, initialOpenedMenu } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(initialOpenedMenu === true);

    const [menuWidth, setMenuWidth] = useState(undefined);
    const [menuHeight, setMenuHeight] = useState(undefined);

    const menuControllerRef = useRef<any>();
    const menuContentRef = useRef<any>();

    useImperativeHandle(ref, () => {
        return {
            closeMenu: () => setIsMenuOpen(false),
        };
    });

    useEffect(() => {
        const closeMenuWhenBlur = (event: MouseEvent) => {
            if (menuControllerRef.current?.contains(event.target) || menuContentRef.current?.contains(event.target)) {
                return;
            }

            setIsMenuOpen(false);
        };

        document.body.addEventListener('click', closeMenuWhenBlur);

        return () => {
            document.body.removeEventListener('click', closeMenuWhenBlur);
        };
    }, []);

    useLayoutEffect(() => {
        setMenuWidth(menuControllerRef.current.offsetWidth);
        setMenuHeight(menuControllerRef.current.offsetHeight);
    }, []);

    const handleClick = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }

        event.preventDefault();
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    return (
        <Dropdown
            menuWidth={menuWidth}
            menuHeight={menuHeight}
            menuController={menuController}
            menuContent={menuContent}
            isMenuOpen={isMenuOpen}
            menuControllerRef={(node) => (menuControllerRef.current = node)}
            menuContentRef={(node) => (menuContentRef.current = node)}
            clickHandler={handleClick}
            keyDownHandler={handleKeyDown}
        />
    );
});

export default DropdownContainer;
