import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiForkAndKnife } from 'react-icons/ci';
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/Navbar.css'
function Navbarr() {
  return (
    <section>
      <div></div>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><CiForkAndKnife /> Your Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#promo">Promo</Nav.Link>
              <Nav.Link href="#statistics">About</Nav.Link>
              <Nav.Link href="#subscribe">Contact</Nav.Link>
              <Nav.Link href="#"><AiOutlineSearch /> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='title' id='home'>
        <h2>
          Title Here
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
        <button>ORDER NOW</button>
      </div>
    </section>
  );
}

export default Navbarr;