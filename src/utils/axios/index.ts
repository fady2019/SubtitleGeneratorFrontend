import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import appStore from '@/store';
import { storeUISliceActions } from '@/store/slices/ui';

import { TResponse, TSendRequestOptions } from '@/utils/axios/types';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class AxiosUtil {
    public static async sendRequest(axiosConfig: AxiosRequestConfig, options: TSendRequestOptions = {}) {
        const { hideErrorMsg, hideSpinner, hideSuccessMsg, spinnerMessage } = options;

        appStore.dispatch(storeUISliceActions.setNotification(null));

        if (hideSpinner !== true) {
            appStore.dispatch(storeUISliceActions.setSpinner({ loading: true, message: spinnerMessage }));
        }

        let response, responseData, success, statusCode;

        try {
            response = await axios({ withCredentials: true, ...axiosConfig });
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

        return { response, data: responseData, success, statusCode };
    }

    public static downloadResponseFile(response?: AxiosResponse<any, any>, defaultFileName = '') {
        if (!response) {
            return;
        }

        const contentType: string = response.headers['content-type'];
        const filename: string =
            response.headers['content-disposition']?.match(/filename="?([^"]+)"?/)[1] || defaultFileName;

        const fileBlob = new Blob([response.data], { type: contentType });

        const url = window.URL.createObjectURL(fileBlob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);

        document.body.appendChild(link);

        link.click();
        link.remove();
    }

    public static initRequestInterceptor() {
        axios.interceptors.request.use(
            (config) => {
                config.url = `${SERVER_URL}/${config.url}`;
                return config;
            },
            (error) => Promise.reject(error)
        );
    }
}

export default AxiosUtil;
