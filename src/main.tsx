import { NextUIProvider, createTheme } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import useDarkMode from 'use-dark-mode';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/index.tsx';
import ErrorComponent from './components/ErrorComponent/index.tsx';
import './index.css';

function Main() {
  const lightTheme = createTheme({
    type: 'light',
  });

  const darkTheme = createTheme({
    type: 'dark',
  });

  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <ErrorBoundary FallbackComponent={ErrorComponent} onError={console.log}>
        <App />
      </ErrorBoundary>
    </NextUIProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
