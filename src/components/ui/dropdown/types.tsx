import React from 'react';

export type TDropdownRef = {
    closeMenu: () => void;
};

export type TDropdownContainerProps = {
    menuController: React.ReactNode;
    menuContent: React.ReactNode;
    initialOpenedMenu?: boolean;
};

export type TDropdownProps = {
    menuWidth: number | undefined;
    menuHeight: number | undefined;
    menuController: React.ReactNode;
    menuContent: React.ReactNode;
    isMenuOpen: boolean;
    menuControllerRef: (node?: Element | null) => void;
    menuContentRef: (node?: Element | null) => void;
    clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    keyDownHandler: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};
