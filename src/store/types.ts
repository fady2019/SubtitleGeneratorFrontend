import { TStoreUISlice } from '@/store/slices/ui/types';
import { TStoreUserSlice } from '@/store/slices/user/types';
import { TStoreAuthSlice } from '@/store/slices/auth/types';
import { TStoreSubtitleSlice } from '@/store/slices/subtitles/types';

export type TAppStore = {
    ui: TStoreUISlice;
    user: TStoreUserSlice;
    auth: TStoreAuthSlice;
    subtitles: TStoreSubtitleSlice;
};
