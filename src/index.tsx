import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store/index';
import './index.css';
import { fetchTasksAction } from './store/api-actions';
import ErrorMessageComponent from './components/error-message/error-message';

store.dispatch(fetchTasksAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessageComponent />
      <App />
    </Provider>
  </React.StrictMode>
);
