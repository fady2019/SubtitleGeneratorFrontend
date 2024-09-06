import AuthForm from '@/components/auth/auth-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

import { TResetPasswordProps } from '@/components/auth/reset-password/types';

import { FaEnvelope } from 'react-icons/fa';

const ResetPassword: React.FC<TResetPasswordProps> = (props) => {
    const { tryAgainIn, ...restProps } = props;

    return (
        <AuthForm formTitle="Reset Password" formConfig={restProps}>
            <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                Icon={FaEnvelope}
                disabled={tryAgainIn !== -1}
            />

            <Button className="mt-2.5" disabled={tryAgainIn > 0} large>
                {tryAgainIn <= 0 ? 'Reset Password' : `Reset again in ${tryAgainIn} seconds`}
            </Button>
        </AuthForm>
    );
};

export default ResetPassword;
