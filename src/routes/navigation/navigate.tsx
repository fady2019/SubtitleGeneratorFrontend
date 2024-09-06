import React, { useEffect } from 'react';

import useNavigate from '@/routes/navigation/useNavigate';

import { TNavigateProps } from '@/routes/navigation/types';

const Navigate: React.FC<TNavigateProps> = (props) => {
    const { to, relative, replace, state, redirectAfterAuthSearchParam } = props;

    const navigate = useNavigate();

    useEffect(() => {
        navigate(to, { relative, replace, state, redirectAfterAuthSearchParam });
    }, [to, relative, replace, state, redirectAfterAuthSearchParam, navigate]);

    return null;
};

export default Navigate;
