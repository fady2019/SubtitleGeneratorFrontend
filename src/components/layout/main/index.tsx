import React from 'react';

import AppRoutes from '@/routes';
import Spinner from '@/components/ui/spinner';

const MainContainer = () => {
    return (
        <main>
            <React.Suspense fallback={<Spinner spinner={{ loading: true }} />}>
                <div className="container">
                    <AppRoutes />
                </div>
            </React.Suspense>
        </main>
    );
};

export default MainContainer;
