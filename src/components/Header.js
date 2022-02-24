import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { supabase } from "../supabaseClient";

export default function Header({ setVideoId }) {
  return (
    <Navbar collapseOnSelect expand="md" className="pt-0 mt-0">
      <Container className="mt-0">
        <Navbar.Brand href="#" onClick={() => setVideoId(null)}>
          The Home Video App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" onClick={() => supabase.auth.signOut()}>
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
