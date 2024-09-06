import React from 'react';

import AuthForm from '@/components/auth/auth-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

import { TSignupData } from '@/components/auth/signup/types';
import { TFormConfig } from '@/components/ui/form/types';

import { FaAt, FaLock, FaEnvelope } from 'react-icons/fa';

const Signup: React.FC<TFormConfig<TSignupData>> = (props) => {
    return (
        <AuthForm formTitle="Signup" formConfig={props}>
            <div className="flex flex-col gap-5 sm:flex-row">
                <Input type="text" name="first_name" id="first-name" placeholder="First Name" />
                <Input type="text" name="last_name" id="last-name" placeholder="Last Name" />
            </div>

            <Input Icon={FaAt} type="text" name="username" id="username" placeholder="Username" />

            <Input Icon={FaEnvelope} type="email" name="email" id="email" placeholder="Email" />

            <Input Icon={FaLock} type="password" name="password" id="password" placeholder="Password" />

            <Button className="mt-2.5" large>
                Sign up
            </Button>
        </AuthForm>
    );
};

export default Signup;
