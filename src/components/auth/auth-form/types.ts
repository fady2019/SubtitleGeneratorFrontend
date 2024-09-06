import { PropsWithChildren } from 'react';

import { TFormConfig } from '@/components/ui/form/types';

export type TAuthFormProps<TValues> = PropsWithChildren & {
    formTitle?: string;
    formConfig: TFormConfig<TValues>;
};
