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

const App = () => {
  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Store />} />
          <Route path='/' element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
