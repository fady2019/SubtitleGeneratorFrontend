import React from 'react';
import { Formik, Form as FormikForm } from 'formik';

import { TFormProps } from '@/components/ui/form/types';

const Form = <TValues,>(props: TFormProps<TValues>): React.ReactElement => {
    const { formConfig, ...restProps } = props;

    return (
        <Formik onSubmit={() => {}} {...formConfig}>
            {() => <FormikForm {...restProps}></FormikForm>}
        </Formik>
    );
};

export default Form;
