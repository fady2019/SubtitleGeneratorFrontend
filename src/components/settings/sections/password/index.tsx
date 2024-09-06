import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import PasswordSection from '@/components/settings/sections/password/PasswordSection';

import { changePassword } from '@/store/slices/auth/actions';

import { TFormOnSubmit } from '@/components/ui/form/types';
import { TChangePasswordData } from '@/components/settings/sections/password/type';
import { TAppDispatch } from '@/store';

const PasswordSectionContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const initialValues: TChangePasswordData = { current_password: '', new_password: '' };

    const validationSchema = Yup.object({
        current_password: Yup.string().trim().required('this field is required'),
        new_password: Yup.string().required('this field is required'),
    });

    const handlePasswordChange: TFormOnSubmit<TChangePasswordData> = async (values, helpers) => {
        dispatch(changePassword(values, helpers.resetForm));
    };

    return (
        <PasswordSection
            formConfig={{
                initialValues,
                validationSchema,
                onSubmit: handlePasswordChange,
            }}
        />
    );
};

export default PasswordSectionContainer;
