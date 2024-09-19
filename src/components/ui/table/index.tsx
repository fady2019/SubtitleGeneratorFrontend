import { twMerge } from 'tailwind-merge';

import TableHeaderCell from '@/components/ui/table/TableHeaderCell';
import TableBodyCell from '@/components/ui/table/TableBodyCell';

import { TTableContainerProps } from '@/components/ui/table/types';

const TableContainer: React.FC<TTableContainerProps> = (props) => {
    const { tableAttributes, headerCellAttributes, bodyCellAttributes, titles, rows, hideCountCol } = props;
    const { className, ...restAttributes } = tableAttributes || {};

    return (
        <table
            className={twMerge('w-full table-auto border-collapse text-center text-sm', className)}
            {...restAttributes}
        >
            <thead>
                <tr>
                    {hideCountCol !== true && (
                        <TableHeaderCell headerCellAttributes={headerCellAttributes}>#</TableHeaderCell>
                    )}

                    {Object.entries(titles).map(([key, label]) => {
                        return (
                            <TableHeaderCell key={key} headerCellAttributes={headerCellAttributes}>
                                {label}
                            </TableHeaderCell>
                        );
                    })}
                </tr>
            </thead>

            <tbody>
                {rows.map((row, idx) => {
                    return (
                        <tr key={row.id} className="group">
                            {hideCountCol !== true && (
                                <TableBodyCell bodyCellAttributes={bodyCellAttributes}>{idx + 1}</TableBodyCell>
                            )}

                            {Object.keys(titles).map((key) => {
                                return (
                                    <TableBodyCell key={`${row.id}_${key}`} bodyCellAttributes={bodyCellAttributes}>
                                        {row[key]}
                                    </TableBodyCell>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TableContainer;
