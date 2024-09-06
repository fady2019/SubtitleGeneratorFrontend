import AuthForm from '@/components/auth/auth-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

import { TSetPasswordData } from '@/components/auth/set-password/types';
import { TFormConfig } from '@/components/ui/form/types';

import { FaLock } from 'react-icons/fa';

const SetPassword: React.FC<TFormConfig<TSetPasswordData>> = (props) => {
    return (
        <AuthForm formTitle="Set Password" formConfig={props}>
            <Input type="password" id="new-password" name="new_password" placeholder="New Password" Icon={FaLock} />

            <Button className="mt-2.5" large>
                Set Password
            </Button>
        </AuthForm>
    );
};

export default SetPassword;
