import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from '@router';
import { RootProviders } from '@contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootProviders>
      <Routes />
    </RootProviders>
  </React.StrictMode>
);
