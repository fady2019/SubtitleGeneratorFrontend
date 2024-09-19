import React from 'react';

import { TTableBodyCellProps } from '@/components/ui/table/types';
import { twMerge } from 'tailwind-merge';

const TableBodyCell: React.FC<React.PropsWithChildren<TTableBodyCellProps>> = (props) => {
    const { children, bodyCellAttributes } = props;
    const { className, ...restAttributes } = bodyCellAttributes || {};

    return (
        <td
            className={twMerge(
                'text-nowrap border-b border-white/25 bg-white/15 p-4 group-last:border-b-0 group-last:first:rounded-bl-md group-last:last:rounded-br-md',
                className
            )}
            {...restAttributes}
        >
            {children}
        </td>
    );
};

export default TableBodyCell;
