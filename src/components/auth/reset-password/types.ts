import { TFormConfig } from '@/components/ui/form/types';

export type TResetPasswordData = {
    email: string;
};

export type TResetPasswordProps = TFormConfig<TResetPasswordData> & {
    tryAgainIn: number;
};
