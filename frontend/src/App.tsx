import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route } from 'react-router-dom';
import { Header } from './pages/home/components/Header';
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
  return (
    <ApolloProvider client={client}>
      <div className='dark'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/authentication' element={<LoginPage />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
