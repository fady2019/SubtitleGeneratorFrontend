import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TStoreAuthSlice } from '@/store/slices/auth/types';

const initialState: TStoreAuthSlice = { isAuth: false, hasAutoLoginDone: false };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(storeAuthSlice, action: PayloadAction<boolean>) {
            storeAuthSlice.isAuth = action.payload;
        },
        setHasAutoLoginDone(storeAuthSlice, action: PayloadAction<boolean>) {
            storeAuthSlice.hasAutoLoginDone = action.payload;
        },
    },
});

export const storeAuthSliceActions = authSlice.actions;

export default authSlice;
