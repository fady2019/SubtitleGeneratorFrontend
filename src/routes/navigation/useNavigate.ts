import { useCallback } from 'react';
import { To, useNavigate as useRouterNavigate } from 'react-router-dom';

import useManageRedirectSearchParam from '@/routes/navigation/useManageRedirectSearchParam';

import { TNavigateFunction, TNavigateOptions } from '@/routes/navigation/types';

const useNavigate = () => {
    const navigate = useRouterNavigate();
    const manageRedirectSearchParam = useManageRedirectSearchParam();

    const customNavigate: TNavigateFunction = useCallback(
        (arg: To | number, options?: TNavigateOptions) => {
            if (typeof arg === 'number') {
                return navigate(arg);
            }

            const { redirectAfterAuthSearchParam, ...restOptions } = options || {};

            return navigate(manageRedirectSearchParam(arg, redirectAfterAuthSearchParam), {
                ...restOptions,
                replace: options?.replace === undefined ? true : options?.replace,
            });
        },
        [navigate, useManageRedirectSearchParam]
    );

    return customNavigate;
};

export default useNavigate;
