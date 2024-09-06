import React from 'react';

import Link from '@/routes/navigation/link';
import AuthForm from '@/components/auth/auth-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

import { TLoginData } from '@/components/auth/login/types';
import { TFormConfig } from '@/components/ui/form/types';

import { FaUser, FaLock } from 'react-icons/fa';

const Login: React.FC<TFormConfig<TLoginData>> = (props) => {
    return (
        <AuthForm formTitle="Login" formConfig={props}>
            <Input
                type="text"
                id="username-or-email"
                name="username_or_email"
                placeholder="Username / Email"
                Icon={FaUser}
            />

            <Input type="password" id="password" name="password" placeholder="Password" Icon={FaLock} />

            <div className="mt-2.5 flex flex-col gap-1.5">
                <Button large>Login</Button>

                <div className="self-end px-5 py-0.5 text-white">
                    <Link to="/auth/reset-password">Forget Password?</Link>
                </div>
            </div>
        </AuthForm>
    );
};

export default Login;
