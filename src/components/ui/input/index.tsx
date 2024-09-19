import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { twMerge } from 'tailwind-merge';

import { TInputProps } from '@/components/ui/input/types';

const Input = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
    const { Icon, className: inputClassName, ...inputRemainingAttrs } = props;

    return (
        <div className="w-full">
            <div
                className={twMerge(
                    'flex w-full items-center gap-3 rounded-3xl bg-white/15 px-6 py-3 text-white',
                    props.disabled ? 'opacity-75' : ''
                )}
                aria-disabled={props.disabled}
            >
                {Icon && (
                    <span className="shrink-0">
                        <Icon />
                    </span>
                )}
                <Field
                    innerRef={ref}
                    className={twMerge(
                        'w-full grow select-none bg-transparent p-0.5 outline-none placeholder:text-white',
                        inputClassName
                    )}
                    {...inputRemainingAttrs}
                />
            </div>

            <ErrorMessage className="px-5 py-1 text-rose-600" name={inputRemainingAttrs.name} component="p" />
        </div>
    );
});

export default Input;
