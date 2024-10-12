import { Dispatch } from '@reduxjs/toolkit';

import AxiosUtil from '@/utils/axios';
import { storeUserSliceActions } from '@/store/slices/user';
import { storeAuthSliceActions } from '@/store/slices/auth';

import { TNavigateFunction } from '@/routes/navigation/types';
import { TLoginData } from '@/components/auth/login/types';
import { TSignupData } from '@/components/auth/signup/types';
import { TResetPasswordData } from '@/components/auth/reset-password/types';
import { TSetPasswordData } from '@/components/auth/set-password/types';
import { TChangePasswordData } from '@/components/settings/sections/password/type';

export const autoLogin = () => {
    return async (dispatch: Dispatch) => {
        const { data } = await AxiosUtil.sendRequest({ url: 'api/auth/auto-login' }, { hideSuccessMsg: true });

        dispatch(storeAuthSliceActions.setHasAutoLoginDone(true));

        if (!data) {
            return dispatch(storeAuthSliceActions.setIsAuth(false));
        }

        dispatch(storeAuthSliceActions.setIsAuth(true));
        dispatch(storeUserSliceActions.setUserInfo(data));
    };
};

export const login = (requestBody: TLoginData, navigate: TNavigateFunction) => {
    return async (dispatch: Dispatch) => {
        const { data, success, statusCode } = await AxiosUtil.sendRequest({
            url: 'api/auth/login',
            method: 'POST',
            data: requestBody,
        });

        if (!success && statusCode !== 403) {
            return dispatch(storeAuthSliceActions.setIsAuth(false));
        }

        dispatch(storeUserSliceActions.setUserInfo(data));

        // email not verified yet
        if (statusCode === 403) {
            dispatch(storeAuthSliceActions.setIsAuth(false));
            return navigate(`/auth/verify-email`);
        }

        dispatch(storeAuthSliceActions.setIsAuth(true));
    };
};

export const signup = (requestBody: TSignupData, navigate: TNavigateFunction) => {
    return async (dispatch: Dispatch) => {
        const { data, success } = await AxiosUtil.sendRequest({
            url: 'api/auth/sign-up',
            method: 'POST',
            data: requestBody,
        });

        dispatch(storeAuthSliceActions.setIsAuth(false));

        if (!success) {
            return;
        }

        dispatch(storeUserSliceActions.setUserInfo(data));
        navigate('/auth/verify-email');
    };
};

export const logout = () => {
    return async (dispatch: Dispatch) => {
        const { success } = await AxiosUtil.sendRequest({ url: 'api/auth/logout' });

        if (!success) {
            return;
        }

        dispatch(storeUserSliceActions.setUserInfo(null));
        dispatch(storeAuthSliceActions.setIsAuth(false));
    };
};

export const resetPassword = (requestBody: TResetPasswordData) => {
    return async () => {
        await AxiosUtil.sendRequest({
            url: 'api/auth/request-password-reset',
            method: 'POST',
            data: requestBody,
        });
    };
};

export const setPassword = (token: string, requestBody: TSetPasswordData, navigate: TNavigateFunction) => {
    return async () => {
        const { success, statusCode } = await AxiosUtil.sendRequest({
            url: 'api/auth/reset-password',
            method: 'POST',
            data: { ...requestBody, token },
        });

        // invalid token
        if (statusCode === 400) {
            return navigate('/auth/reset-password');
        }

        if (!success) {
            return;
        }

        navigate('/auth/login');
    };
};

export const requestEmailVerification = (userId: string) => {
    return async () => {
        await AxiosUtil.sendRequest({
            url: `api/auth/request-email-verification/${userId}`,
        });
    };
};

export const verifyEmail = (token: string, navigate: TNavigateFunction) => {
    return async () => {
        await AxiosUtil.sendRequest(
            {
                url: `api/auth/verify-email/${token}`,
            },
            { spinnerMessage: 'Verifying your Email' }
        );

        navigate('/auth/login');
    };
};

export const changePassword = (requestBody: TChangePasswordData, resetForm: () => void) => {
    return async () => {
        const { success } = await AxiosUtil.sendRequest({
            url: 'api/auth/change-password',
            method: 'PUT',
            data: requestBody,
        });

        if (success) {
            resetForm();
        }
    };
};
