import { IconType } from 'react-icons';

export type TInputProps = JSX.IntrinsicElements['input'] & {
    Icon?: IconType;
    name: string;
};
