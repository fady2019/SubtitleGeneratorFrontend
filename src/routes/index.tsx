import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Navigate from '@/routes/navigation/navigate';

import { TAppStore } from '@/store/types';

const ProtectedRoute = React.lazy(() => import('@/routes/ProtectedRoute'));
const LandingPage = React.lazy(() => import('@/components/landing-page'));
const Login = React.lazy(() => import('@/components/auth/login'));
const Singup = React.lazy(() => import('@/components/auth/signup'));
const ResetPassword = React.lazy(() => import('@/components/auth/reset-password'));
const SetPassword = React.lazy(() => import('@/components/auth/set-password'));
const VerifyEmail = React.lazy(() => import('@/components/auth/verify-email'));
const RequestEmailVerification = React.lazy(() => import('@/components/auth/request-email-verification'));
const Settings = React.lazy(() => import('@/components/settings'));
const Dashboard = React.lazy(() => import('@/components/dashboard'));
const GenerateSubtitleContainer = React.lazy(() => import('@/components/subtitles/generate'));

const AppRoutes = () => {
    const hasAutoLoginDone = useSelector((store: TAppStore) => store.auth.hasAutoLoginDone);

    if (!hasAutoLoginDone) {
        return null;
    }

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route element={<ProtectedRoute protectedWhen="AUTH" redirectTo="/" />}>
                <Route path="/auth">
                    <Route index element={<Navigate to="login" replace redirectAfterAuthSearchParam="keep" />} />
                    <Route path="sign-up" element={<Singup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="reset-password/:token" element={<SetPassword />} />
                    <Route path="verify-email" element={<RequestEmailVerification />} />
                    <Route path="verify-email/:token" element={<VerifyEmail />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoute protectedWhen="NOT_AUTH" redirectTo="/auth" />}>
                <Route path="/@me" element={<Dashboard />} />

                <Route path="/subtitles">
                    <Route path="" element={<Navigate to="/@me" />} />
                    <Route path="generate" element={<GenerateSubtitleContainer />} />
                </Route>

                <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<>Not Found</>} />
        </Routes>
    );
};

export default AppRoutes;
