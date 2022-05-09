import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Image, Nav, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavJumbotron = () => {
  return (
    <Container fluid>
      <Row className="jumbotron">
        <Col>
          <Image src="/logo.png" fluid alt="logo" className="jumbotron"></Image>
        </Col>
      </Row>
    </Container>
  );
};

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse className="justify-content-center">
            <Nav className="navbar-left">
              <Link href="/" passHref>
                <Nav.Link active={currentPath === "/"}>Etusivu</Nav.Link>
              </Link>
              <Link href="/saannot" passHref>
                <Nav.Link active={currentPath === "/saannot"}>Säännöt</Nav.Link>
              </Link>
              <Link href="/yllapito" passHref>
                <Nav.Link active={currentPath === "/yllapito"}>
                  Ylläpito
                </Nav.Link>
              </Link>
            </Nav>
            <Button variant="warning" href="https://kauppa.motimaa.net">
              Kauppa
            </Button>
            <Nav className="navbar-right">
              <Nav.Link href="https://rankku.motimaa.net">
                Rangaistukset
              </Nav.Link>
              <Nav.Link href="#">Äänestä</Nav.Link>
              <NavDropdown title="Lisää">
                <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavJumbotron />
    </>
  );
};

export default Navigation;
