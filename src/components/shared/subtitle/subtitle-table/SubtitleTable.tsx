import React from 'react';

import Table from '@/components/ui/table';

import { TSubtitleTableProps } from '@/components/shared/subtitle/subtitle-table/types';

const SubtitleTable: React.FC<TSubtitleTableProps> = (props) => {
    const {
        subtitleActionsTableBody,
        subtitleActionsTableTitles,
        subtitleDataTableBody,
        subtitleDataTableTitles,
        hideCountCol,
    } = props;

    return (
        <div className="flex items-stretch overflow-x-clip">
            <div className="invisible-scrollbar grow overflow-x-auto">
                <Table
                    tableAttributes={{ className: 'h-full' }}
                    headerCellAttributes={{ className: '!rounded-tr-none' }}
                    bodyCellAttributes={{ className: '!rounded-br-none' }}
                    titles={subtitleDataTableTitles}
                    rows={subtitleDataTableBody}
                    hideCountCol={hideCountCol}
                />
            </div>

            <Table
                tableAttributes={{ className: 'w-auto' }}
                headerCellAttributes={{ className: '!rounded-tl-none border-l border-amber-700' }}
                bodyCellAttributes={{ className: '!rounded-bl-none border-l border-white/25' }}
                titles={subtitleActionsTableTitles}
                rows={subtitleActionsTableBody}
                hideCountCol={true}
            />
        </div>
    );
};

export default SubtitleTable;
