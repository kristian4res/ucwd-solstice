import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './contexts/app-context';
import { SearchFormProvider } from './contexts/search-form-context';
import { FilterFormProvider } from './contexts/filter-form-context';
import { SignInSignUpProvider } from './contexts/sign-in-sign-up-context';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <SearchFormProvider>
            <FilterFormProvider>
              <SignInSignUpProvider>
                <App />
              </SignInSignUpProvider>
          </FilterFormProvider>
        </SearchFormProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
