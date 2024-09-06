import { TStoreUISlice } from '@/store/slices/ui/types';
import { TStoreUserSlice } from '@/store/slices/user/types';
import { TStoreAuthSlice } from '@/store/slices/auth/types';

export type TAppStore = {
    ui: TStoreUISlice;
    user: TStoreUserSlice;
    auth: TStoreAuthSlice;
};
