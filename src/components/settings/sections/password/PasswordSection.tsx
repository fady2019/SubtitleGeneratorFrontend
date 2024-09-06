import React from 'react';

import SettingSection from '@/components/settings/sections/SettingSection';
import Form from '@/components/ui/form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

import { TFormProps } from '@/components/ui/form/types';
import { TChangePasswordData } from '@/components/settings/sections/password/type';

import { FaLock } from 'react-icons/fa';

const PasswordSection: React.FC<TFormProps<TChangePasswordData>> = (props) => {
    return (
        <SettingSection sectionTitle="Password">
            <Form className="flex flex-col gap-5" {...props}>
                <Input
                    Icon={FaLock}
                    type="password"
                    name="current_password"
                    id="current_password"
                    placeholder="Current Password"
                />

                <Input Icon={FaLock} type="password" name="new_password" id="new_password" placeholder="New Password" />

                <Button large>Change Password</Button>
            </Form>
        </SettingSection>
    );
};

export default PasswordSection;
