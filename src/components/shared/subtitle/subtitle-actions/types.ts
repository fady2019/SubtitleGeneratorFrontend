import { TSubtitle } from '@/types/subtitle';

export type TSubtitleRowActionContainerProps = {
    subtitle: TSubtitle;
    excludedButtons?: {
        cancel?: boolean;
        delete?: boolean;
        open?: boolean;
        regenerate?: boolean;
        fileMenu?: boolean;
    };
};

export type TSubtitleActionButtonProps = {
    id: string;
};
