export type TEditableTextProps = {
    initText: string;
    editable?: boolean;
    textUpdateHandler: (text: string) => void;
};
