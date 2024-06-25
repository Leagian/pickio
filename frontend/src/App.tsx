import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './pages/home/components/Header';
import { ThemeProvider } from './components/ui/theme-provider';
import { Home } from './pages/home/Home';
import { LoginPage } from './pages/login/LoginPage';

import './App.css';
import './index.css';

const httpLink = createHttpLink({
  uri: '/api',
});

// https://www.apollographql.com/docs/react/networking/authentication#header

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div>
          {location.pathname !== '/authentication' && <Header />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/authentication' element={<LoginPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
