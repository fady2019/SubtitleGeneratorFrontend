import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import SetPassword from '@/components/auth/set-password/SetPassword';

import useNavigate from '@/routes/navigation/useNavigate';
import { setPassword } from '@/store/slices/auth/actions';

import { TSetPasswordData } from '@/components/auth/set-password/types';
import { TFormOnSubmit } from '@/components/ui/form/types';
import { TAppDispatch } from '@/store';

const SetPasswordContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();
    const { token } = useParams();

    const initialValues: TSetPasswordData = { new_password: '' };

    const validationSchema = Yup.object({
        new_password: Yup.string().required('this field is required'),
    });

    const handlePasswordSetting: TFormOnSubmit<TSetPasswordData> = (values) => {
        dispatch(setPassword(token!, values, navigate));
    };

    return (
        <SetPassword
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlePasswordSetting}
        />
    );
};

export default SetPasswordContainer;
