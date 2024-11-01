import { configureStore } from '@reduxjs/toolkit';

import { TAppStore } from '@/store/types';
import uiSlice from '@/store/slices/ui';
import userSlice from '@/store/slices/user';
import authSlice from '@/store/slices/auth';
import subtitlesSlice from '@/store/slices/subtitles';

const appStore = configureStore<TAppStore>({
    reducer: {
        ui: uiSlice.reducer,
        user: userSlice.reducer,
        auth: authSlice.reducer,
        subtitles: subtitlesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export type TAppDispatch = typeof appStore.dispatch;

export default appStore;
