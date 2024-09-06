import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import ResetPassword from '@/components/auth/reset-password/ResetPassword';

import useCountdown from '@/hooks/useCountdown';
import { resetPassword } from '@/store/slices/auth/actions';

import { TResetPasswordData } from '@/components/auth/reset-password/types';
import { TFormOnSubmit } from '@/components/ui/form/types';
import { TAppDispatch } from '@/store';

const ResetPasswordContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();
    const { count: tryAgainIn, startCount: startTryAgainCount } = useCountdown(-1);

    const initialValues: TResetPasswordData = { email: '' };

    const validationSchema = Yup.object({
        email: Yup.string().trim().required('this field is required'),
    });

    const handlePasswordResetting: TFormOnSubmit<TResetPasswordData> = (values) => {
        if (tryAgainIn > 0) {
            return;
        }

        dispatch(resetPassword(values));

        startTryAgainCount(30);
    };

    return (
        <ResetPassword
            initialValues={initialValues}
            validationSchema={validationSchema}
            tryAgainIn={tryAgainIn}
            onSubmit={handlePasswordResetting}
        />
    );
};

export default ResetPasswordContainer;
