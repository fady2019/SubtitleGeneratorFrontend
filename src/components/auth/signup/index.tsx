import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Signup from '@/components/auth/signup/Signup';

import useNavigate from '@/routes/navigation/useNavigate';
import { signup } from '@/store/slices/auth/actions';

import { TSignupData } from '@/components/auth/signup/types';
import { TFormOnSubmit } from '@/components/ui/form/types';
import { TAppDispatch } from '@/store';

const SignupContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();

    const initialValues: TSignupData = { first_name: '', last_name: '', username: '', email: '', password: '' };

    const validationSchema = Yup.object({
        first_name: Yup.string().trim().required('this field is required'),
        last_name: Yup.string().trim().required('this field is required'),
        username: Yup.string().trim().required('this field is required'),
        email: Yup.string().trim().required('this field is required'),
        password: Yup.string().required('this field is required'),
    });

    const handleSignup: TFormOnSubmit<TSignupData> = (values) => {
        dispatch(signup(values, navigate));
    };

    return <Signup initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignup} />;
};

export default SignupContainer;
