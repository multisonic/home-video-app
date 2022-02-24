import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="pt-0 mt-0">
      <Container className="mt-0">
        <Navbar.Brand>
          <Link style={{ color: "black", textDecoration: "none" }} to="/">
            The Home Video App
          </Link>
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
