import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

import '../css/Navibar.css'
function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>HOME</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <NavDropdown title="ADVANTAGE" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/OurSolution'>OUR SOLUTION</NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/MeetDrPrem'>
              MEET DR. PREM
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/TheTeam'>THE TEAM</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/OurSucessStories'>SUCCESS STORIES</NavDropdown.Item>
            </NavDropdown>

        
            <Nav.Link as={Link} to='/AllOn4'>ALL-ON-4</Nav.Link>

            <NavDropdown title="IMPLANTS" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/AllOn6'>All-On-6</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Asesthetic'>
                AESTHETIC IMPLANTS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/GuidedSurgeries'>GUIDED SURGERIES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/SinusLifts'>SINUS LIFTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/ProsthesisTypes'>PROSTHESIS TYPES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/ThoothOnDay'>TOOTH-IN-A-DAY</NavDropdown.Item>
               
            </NavDropdown>

            <NavDropdown title="INTERNATIONAL PATIENTS" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/NewPatients'>NEW PATIENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/WalkPatients'>WALK-PATIENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Testimonials'>
                TESTIMONIALS
              </NavDropdown.Item>
               
            </NavDropdown>

            <Nav.Link as={Link} to='/blog'>BLOGS</Nav.Link>

            <Nav.Link as={Link} to='/Contact' className="contact_link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;