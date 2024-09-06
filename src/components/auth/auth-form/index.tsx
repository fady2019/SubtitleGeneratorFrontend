import React from 'react';

import Form from '@/components/ui/form';
import AuthPageLayout from '@/components/shared/auth-page-layout';

import { TAuthFormProps } from '@/components/auth/auth-form/types';

const AuthForm = <TValues,>(props: TAuthFormProps<TValues>): React.ReactElement => {
    const { formTitle, formConfig, children } = props;

    return (
        <AuthPageLayout title={formTitle}>
            <Form className="flex flex-col gap-5" formConfig={formConfig}>
                {children}
            </Form>
        </AuthPageLayout>
    );
};

export default AuthForm;
