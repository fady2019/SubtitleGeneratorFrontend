import { LengthType } from 'react-spinners/helpers/props';

export type TSpinner = {
    loading: boolean;
    message?: string;
};

export type TSpinnerProps = {
    spinner: TSpinner | null;
    size?: LengthType;
    color?: string;
    cssOverride?: React.CSSProperties;
    speedMultiplier?: number;
    hideBackdrop?: boolean;
};
