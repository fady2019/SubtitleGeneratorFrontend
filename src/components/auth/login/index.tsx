import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Login from '@/components/auth/login/Login';

import useNavigate from '@/routes/navigation/useNavigate';
import { login } from '@/store/slices/auth/actions';

import { TFormOnSubmit } from '@/components/ui/form/types';
import { TLoginData } from '@/components/auth/login/types';
import { TAppDispatch } from '@/store';

const LoginContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();

    const initialValues: TLoginData = { username_or_email: '', password: '' };

    const validationSchema = Yup.object({
        username_or_email: Yup.string().trim().required('this field is required'),
        password: Yup.string().required('this field is required'),
    });

    const handleLogin: TFormOnSubmit<TLoginData> = async (values) => {
        dispatch(login(values, navigate));
    };

    return <Login initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin} />;
};

export default LoginContainer;
