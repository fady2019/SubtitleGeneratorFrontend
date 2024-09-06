import { TNotification } from '@/components/ui/notification/types';
import { TSpinner } from '@/components/ui/spinner/types';

export type TStoreUISlice = {
    notification: TNotification | null;
    spinner: TSpinner | null;
};
