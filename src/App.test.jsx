import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts/app-context';
import { SearchFormProvider } from './contexts/search-form-context';
import { FilterFormProvider } from './contexts/filter-form-context';
import { SignInSignUpProvider } from './contexts/sign-in-sign-up-context';
import App from './App';

test('renders Solstice app without crashing', () => {
  render(
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
  );
  const headingElement = screen.getByText(/inspiration for your next trip/i);
  expect(headingElement).toBeInTheDocument();
});

