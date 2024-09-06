import { NavLink } from 'react-router-dom';

import useManageRedirectSearchParam from '@/routes/navigation/useManageRedirectSearchParam';

import { TLinkProps } from '@/routes/navigation/types';

const Link: React.FC<TLinkProps> = (props) => {
    const { to, keepRedirectAfterAuthSearchParam, ...restProps } = props;

    const manageRedirectSearchParam = useManageRedirectSearchParam();

    const link = manageRedirectSearchParam(to, keepRedirectAfterAuthSearchParam ? 'keep' : undefined);

    return <NavLink to={link} {...restProps} />;
};

export default Link;
