import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TTableHeaderCellProps } from '@/components/ui/table/types';

const TableHeaderCell: React.FC<React.PropsWithChildren<TTableHeaderCellProps>> = (props) => {
    const { children, headerCellAttributes } = props;
    const { className, ...restAttributes } = headerCellAttributes || {};

    return (
        <th
            className={twMerge(
                'text-nowrap border-b border-amber-700 bg-violet-950 p-4 first:rounded-tl-md last:rounded-tr-md',
                className
            )}
            {...restAttributes}
        >
            {children}
        </th>
    );
};

export default TableHeaderCell;
