import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TStoreUserSlice } from '@/store/slices/user/types';
import { TUser } from '@/types/user';

const initialState: TStoreUserSlice = {
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(storeUserSlice, actions: PayloadAction<TUser | null>) {
            storeUserSlice.userInfo = actions.payload;
        },
    },
});

export const storeUserSliceActions = userSlice.actions;

export default userSlice;
