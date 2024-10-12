import { TSubtitle } from '@/types/subtitle';
import { TSubtitleRowActionContainerProps } from '@/components/shared/subtitle/subtitle-actions/types';
import { TTableContainerProps } from '@/components/ui/table/types';

export type TSubtitleTableContainerProps = {
    subtitles: Array<TSubtitle>;
    subtitleExcludedActions?: TSubtitleRowActionContainerProps['excludedButtons'];
    hideCountCol?: boolean;
};

export type TSubtitleTableProps = {
    subtitleDataTableTitles: TTableContainerProps['titles'];
    subtitleDataTableBody: TTableContainerProps['rows'];
    subtitleActionsTableTitles: TTableContainerProps['titles'];
    subtitleActionsTableBody: TTableContainerProps['rows'];
    hideCountCol?: boolean;
};
