import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/home/Home';

import './App.css';
import './index.css';

function App() {
  return (
    <div className='dark'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
