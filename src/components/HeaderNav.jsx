import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/imgs/logo-white.png";
import "../global.css";
import styles from "../css/nav.module.css";
import { ThemeToggleButton } from "../styled-components/ThemeToggleButton";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const { count } = useSelector(state => state.counterSlice);

  const handleScroll = () => {
    setScrolled(window.scrollY > 64);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`position-fixed start-0 w-100 ${scrolled
        ? styles["navbar-scrolled"]
        : styles["navbar-initial"]}`}
      style={{ zIndex: 999 }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="108" style={{ height: "auto" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto d-flex justify-content-center w-100">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "nav-link"}
              to="/"
            >
              LandingPage
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "nav-link"}
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "nav-link"}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "nav-link"}
              to="/counter"
            >
              Counter({count})
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "nav-link"}
              to="/not-found"
            >
              Not-Found
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <ThemeToggleButton />
      </Container>
    </Navbar>
  );
}
