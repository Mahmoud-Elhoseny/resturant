import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Navbar />
      <Landing />
      <Section3 />
      <Section4 />
      <Subscribe />
      <Footer />
    </Container>
  );
}

export default App;
