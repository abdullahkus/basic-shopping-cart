// Pages
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
// Components
import Navbar from './components/Navbar';
// React Router
import { Routes, Route } from 'react-router-dom';
// Bootstrap
import { Container } from 'react-bootstrap';
// Context
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
