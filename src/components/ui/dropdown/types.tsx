import React from 'react';

export type TDropdownRef = {
    closeMenu: () => void;
};

export type TDropdownContainerProps = {
    menuController: React.ReactNode;
    menuContent: React.ReactNode;
    menuContentContainerAttributes?: Omit<JSX.IntrinsicElements['div'], 'ref'>;
    initialOpenedMenu?: boolean;
};

export type TDropdownProps = Omit<TDropdownContainerProps, 'initialOpenedMenu'> & {
    isMenuOpen: boolean;
    menuControllerContainerRef: (node?: Element | null) => void;
    menuContentContainerRef: (node?: Element | null) => void;
    clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    keyDownHandler: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};
