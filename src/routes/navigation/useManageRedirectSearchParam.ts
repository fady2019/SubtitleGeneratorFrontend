import { To, useLocation } from 'react-router-dom';

import { TExtraOptions } from '@/routes/navigation/types';

const REDIRECT_SEARCH_PARAM_NAME = 'redirect-after-auth';

const useManageRedirectSearchParam = () => {
    const location = useLocation();

    const manageRedirectSearchParam = (
        to: To | string,
        redirectAfterAuthSearchParam: TExtraOptions['redirectAfterAuthSearchParam']
    ) => {
        const searchParams = new URLSearchParams(location.search);

        if (searchParams.has(REDIRECT_SEARCH_PARAM_NAME)) {
            const redirectTo = searchParams.get(REDIRECT_SEARCH_PARAM_NAME)!;

            if (redirectAfterAuthSearchParam === 'keep') {
                to += `?${REDIRECT_SEARCH_PARAM_NAME}=${redirectTo}`;
            } else if (redirectAfterAuthSearchParam === 'redirect') {
                to = redirectTo;
            }
        } else if (redirectAfterAuthSearchParam === 'set') {
            to += `?${REDIRECT_SEARCH_PARAM_NAME}=${location.pathname}`;
        }

        return to;
    };

    return manageRedirectSearchParam;
};

export default useManageRedirectSearchParam;
