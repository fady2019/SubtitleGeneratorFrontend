import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import appStore from '@/store';
import { storeUISliceActions } from '@/store/slices/ui';

import { TResponse, TSendRequestOptions } from '@/utils/axios/types';

class AxiosUtil {
    public static async sendRequest(axiosConfig: AxiosRequestConfig, options: TSendRequestOptions = {}) {
        const { hideErrorMsg, hideSpinner, hideSuccessMsg, spinnerMessage } = options;

        appStore.dispatch(storeUISliceActions.setNotification(null));

        if (hideSpinner !== true) {
            appStore.dispatch(storeUISliceActions.setSpinner({ loading: true, message: spinnerMessage }));
        }

        let responseData, success, statusCode;

        try {
            const response = await axios({ withCredentials: true, ...axiosConfig });
            const responseBody: TResponse = response.data;

            if (hideSuccessMsg !== true) {
                const msg = responseBody.message || 'operation successfully completed';

                appStore.dispatch(storeUISliceActions.setNotification({ type: 'success', content: msg }));
            }

            responseData = responseBody?.data;
            success = true;
            statusCode = response.status;
        } catch (err) {
            const responseErr = err as AxiosError<TResponse>;
            const responseBody = responseErr.response?.data;

            if (hideErrorMsg !== true) {
                const errorMsg =
                    responseBody?.message || responseErr.message || 'something wrong has been occurred, try again!';

                appStore.dispatch(storeUISliceActions.setNotification({ type: 'error', content: errorMsg }));
            }

            responseData = responseBody?.data;
            success = false;
            statusCode = responseErr.status;
        }

        appStore.dispatch(storeUISliceActions.setSpinner(null));

        return { data: responseData, success, statusCode };
    }

    public static initRequestInterceptor() {
        axios.interceptors.request.use(
            (config) => {
                config.url = `http://127.0.0.1:5000/${config.url}`;
                return config;
            },
            (error) => Promise.reject(error)
        );
    }
}

export default AxiosUtil;
