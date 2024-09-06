import Button from '@/components/ui/button';

import AuthPageLayout from '@/components/shared/auth-page-layout';

import { TRequestEmailVerificationProps } from '@/components/auth/request-email-verification/types';

const RequestEmailVerification: React.FC<TRequestEmailVerificationProps> = (props) => {
    const { requestEmailVerificationHandler, tryAgainIn } = props;

    return (
        <AuthPageLayout title="Request Email Verification">
            <div className="flex flex-col gap-8">
                <div className="text-justify text-lg text-white">
                    <p>
                        To complete your registration and activate your account, we need to verify your email address.
                        Please use the button below to request a verification email. This email will contain a link that
                        you must click to confirm your email address and finish the verification process.
                    </p>

                    <p className="mt-4">
                        If you do not receive the verification email within a few minutes, please check your spam or
                        junk folder. If you still cannot find it, you can request another verification email by clicking
                        the button again.
                    </p>
                </div>

                <Button
                    className="disabled:opacity-70"
                    disabled={tryAgainIn > 0}
                    onClick={requestEmailVerificationHandler}
                >
                    {tryAgainIn === 0 ? 'Request' : `Request again in ${tryAgainIn} seconds`}
                </Button>
            </div>
        </AuthPageLayout>
    );
};

export default RequestEmailVerification;
