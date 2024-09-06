import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from '@/store';

import AxiosUtil from '@/utils/axios';

AxiosUtil.initRequestInterceptor();

import App from '@/App.tsx';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
    <Provider store={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
