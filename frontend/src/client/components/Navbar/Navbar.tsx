import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { BrightnessHigh, Discord, Instagram } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavJumbotron = () => {
  return (
    <Container fluid className="jumbotron-container">
      <Image
        alt="Motimaa logo"
        src="/logo.png"
        height={150}
        width={150}
        unoptimized
      />
      <h1>Motimaa</h1>
      <h2>Suomen suurin Minecraft-palvelin jo vuodesta 2016</h2>
    </Container>
  );
};

const Navigation = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // TODO: This is not really ideal, but fixes render missmatch error.
  if (!mounted) {
    return null;
  }

  return (
    <div className="navbar-wrapper">
      <Navbar
        variant={resolvedTheme === "light" ? "light" : "dark"}
        expand="lg"
      >
        <Container fluid="md" className="navbar-container">
          <Navbar.Toggle aria-controls="navbar" />
          <div className="navbar-icon-container">
            <Discord
              onClick={() => handleRedirect("https://discord.gg/bY9VQdBVGz")}
            />
            <Instagram
              onClick={() =>
                handleRedirect("https://www.instagram.com/motisquad")
              }
            />
          </div>
          <Navbar.Collapse>
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
            <Link href="https://rankku.motimaa.net" passHref>
              <Button variant="warning">Kauppa</Button>
            </Link>
            <Nav className="navbar-right">
              <Link href="https://rankku.motimaa.net" passHref>
                <Nav.Link>Rangaistukset</Nav.Link>
              </Link>
              <Link href="/aanesta" passHref>
                <Nav.Link active={currentPath === "/aanesta"}>Äänestä</Nav.Link>
              </Link>
              <NavDropdown title="Lisää">
                <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-theme-switch">
            <Button variant="link" onClick={handleThemeChange}>
              <BrightnessHigh /> Vaihda teema
            </Button>
          </div>
        </Container>
      </Navbar>
      <NavJumbotron />
    </div>
  );
};

export default Navigation;
