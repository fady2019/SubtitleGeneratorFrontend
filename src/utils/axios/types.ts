export type TSendRequestOptions = {
    hideErrorMsg?: boolean;
    hideSuccessMsg?: boolean;
    hideSpinner?: boolean;
    spinnerMessage?: string;
};

export type TResponse = {
    data?: any;
    message?: string;
};
