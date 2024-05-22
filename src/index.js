import React from 'react';
import App from './App';
import './index.css'
import 'tailwindcss/tailwind.css';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './contexts/ContextProvider';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider>
    <App />
    </ContextProvider>
  </Provider>
  </React.StrictMode>
);



