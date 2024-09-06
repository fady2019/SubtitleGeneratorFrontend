import { FormikConfig, FormikHelpers, FormikValues } from 'formik';

export type TFormOnSubmit<TValues> = (
    values: FormikValues & TValues,
    formikHelpers: FormikHelpers<FormikValues & TValues>
) => void | Promise<unknown>;

export type TFormConfig<TValues> = Omit<FormikConfig<FormikValues & TValues>, 'children' | 'onSubmit'> & {
    onSubmit?: (
        values: FormikValues & TValues,
        formikHelpers: FormikHelpers<FormikValues & TValues>
    ) => void | Promise<unknown>;
};

export type TFormProps<TValues> = JSX.IntrinsicElements['form'] & {
    formConfig: TFormConfig<TValues>;
};
