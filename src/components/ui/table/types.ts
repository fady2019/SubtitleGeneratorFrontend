import React from 'react';

export type TTableContainerProps = {
    tableAttributes?: React.HTMLAttributes<HTMLTableElement>;
    titles: Record<string, string>; // key: label
    rows: Array<Record<string, React.ReactNode> & { id: React.Key }>;
    hideCountCol?: boolean;
} & TTableHeaderCellProps &
    TTableBodyCellProps;

export type TTableHeaderCellProps = {
    headerCellAttributes?: React.HTMLAttributes<HTMLTableCellElement>;
};

export type TTableBodyCellProps = {
    bodyCellAttributes?: React.HTMLAttributes<HTMLTableCellElement>;
};
