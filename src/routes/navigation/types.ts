import { NavLinkProps, NavigateFunction, NavigateOptions, NavigateProps, To } from 'react-router-dom';

/**
 * how to deal with the "redirect-after-auth" search param
 *
 * set         => if not exists, set it
 * keep        => if exists, keep it
 * redirect    => if exists, use it to redirect
 * [undefined] => remove it
 */
export type TExtraOptions = {
    redirectAfterAuthSearchParam?: 'set' | 'keep' | 'redirect';
};

export type TNavigateProps = NavigateProps & TExtraOptions;

export type TNavigateOptions = NavigateOptions & TExtraOptions;

export type TNavigateFunction = NavigateFunction & {
    (to: To, options?: TNavigateOptions): void;
};

export type TLinkProps = NavLinkProps & { keepRedirectAfterAuthSearchParam?: boolean };
