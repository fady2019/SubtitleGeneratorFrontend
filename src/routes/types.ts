import { To } from 'react-router-dom';

export type TProtectedRoutes = {
    protectedWhen: 'AUTH' | 'NOT_AUTH';
    redirectTo: string | To;
};
