import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import useManageRedirectSearchParam from '@/routes/navigation/useManageRedirectSearchParam';

import { TLinkProps } from '@/routes/navigation/types';

const Link: React.FC<TLinkProps> = (props) => {
    const { to, keepRedirectAfterAuthSearchParam, className: linkClassName, ...restProps } = props;

    const manageRedirectSearchParam = useManageRedirectSearchParam();

    const link = manageRedirectSearchParam(to, keepRedirectAfterAuthSearchParam ? 'keep' : undefined);

    return (
        <NavLink
            to={link}
            className={(props) =>
                twMerge(
                    'text-nowrap',
                    !linkClassName || typeof linkClassName === 'string' ? linkClassName : linkClassName(props)
                )
            }
            {...restProps}
        />
    );
};

export default Link;
