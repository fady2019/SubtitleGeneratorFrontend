import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { twMerge } from 'tailwind-merge';

import { TCheckboxProps } from '@/components/ui/checkbox/types';

const Checkbox = React.forwardRef<HTMLInputElement, TCheckboxProps>((props, ref) => {
    const { className: checkboxClassName, label, ...checkboxRemainingAttrs } = props;

    return (
        <div className="w-full">
            <div
                className={twMerge(
                    'flex w-full items-center gap-3 rounded-3xl bg-white/15 px-6 py-3 text-white',
                    props.disabled ? 'opacity-75' : ''
                )}
                aria-disabled={props.disabled}
            >
                <label htmlFor={checkboxRemainingAttrs.id} className="flex w-full select-none items-center gap-2">
                    <Field
                        innerRef={ref}
                        type="checkbox"
                        className={twMerge('size-5', checkboxClassName)}
                        {...checkboxRemainingAttrs}
                    />

                    {label}
                </label>
            </div>

            <ErrorMessage className="px-5 py-1 text-rose-600" name={checkboxRemainingAttrs.name} component="p" />
        </div>
    );
});

export default Checkbox;
