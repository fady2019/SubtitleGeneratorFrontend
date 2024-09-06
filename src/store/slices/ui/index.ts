import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TStoreUISlice } from '@/store/slices/ui/types';
import { TNotification } from '@/components/ui/notification/types';
import { TSpinner } from '@/components/ui/spinner/types';

const initialState: TStoreUISlice = {
    notification: null,
    spinner: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setNotification(storeUiSlice, actions: PayloadAction<TNotification | null>) {
            storeUiSlice.notification = actions.payload;
        },
        setSpinner: (storeUiSlice, action: PayloadAction<TSpinner | null>) => {
            storeUiSlice.spinner = action.payload;
        },
    },
});

export const storeUISliceActions = uiSlice.actions;

export default uiSlice;
