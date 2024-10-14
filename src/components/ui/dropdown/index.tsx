import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';

import Dropdown from '@/components/ui/dropdown/Dropdown';

import { TDropdownContainerProps, TDropdownRef } from '@/components/ui/dropdown/types';

const DropdownContainer = React.forwardRef<TDropdownRef, TDropdownContainerProps>((props, ref) => {
    const { menuController, menuContent, menuContentContainerAttributes, initialOpenedMenu } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(initialOpenedMenu === true);

    const menuControllerContainerRef = useRef<Element | null | undefined>(null);
    const menuContentContainerRef = useRef<Element | null | undefined>(null);

    useImperativeHandle(ref, () => {
        return {
            closeMenu: () => setIsMenuOpen(false),
        };
    });

    useEffect(() => {
        const closeMenuWhenBlur = (event: MouseEvent) => {
            if (
                menuControllerContainerRef.current?.contains(event.target as Node) ||
                menuContentContainerRef.current?.contains(event.target as Node)
            ) {
                return;
            }

            setIsMenuOpen(false);
        };

        document.body.addEventListener('click', closeMenuWhenBlur);

        return () => {
            document.body.removeEventListener('click', closeMenuWhenBlur);
        };
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
            menuController={menuController}
            menuContent={menuContent}
            menuContentContainerAttributes={menuContentContainerAttributes}
            isMenuOpen={isMenuOpen}
            menuControllerContainerRef={(node) => (menuControllerContainerRef.current = node)}
            menuContentContainerRef={(node) => (menuContentContainerRef.current = node)}
            clickHandler={handleClick}
            keyDownHandler={handleKeyDown}
        />
    );
});

export default DropdownContainer;
