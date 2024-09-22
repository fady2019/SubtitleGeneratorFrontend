export type TCheckboxProps = Omit<JSX.IntrinsicElements['input'], 'type'> & {
    id: string;
    name: string;
    label?: string;
};
