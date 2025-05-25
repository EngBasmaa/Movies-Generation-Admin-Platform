import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram
} from "react-icons/fa";
import logo from "../assets/imgs/logo-white.png";
import { Navbar } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#0c0c0c",
          color: "#ffffff",
          paddingTop: "50px",
          paddingBottom: "20px"
        }}
      >
        <Container>
          <Row className="mb-4 justify-content-between">
            <Col md={6} className="mb-4" width="108" style={{ height: "auto" }}>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  alt="Logo"
                  width="108"
                  style={{ height: "auto" }}
                />
              </Navbar.Brand>{" "}
            </Col>

            <Col
              md={6}
              className="d-flex justify-content-end align-items-start gap-3 allign-content-center"
            >
              <a
                href="#"
                style={{ color: "#ccc", textDecoration: "none" }}
                className="footer-link"
              >
                Help
              </a>

              <a
                href="#"
                style={{ color: "#ccc", textDecoration: "none" }}
                className="footer-link"
              >
                Privacy Policy
              </a>
              <div className="d-flex gap-2 ms-3">
                <div className="bg-dark rounded-circle p-2">
                  <FaTwitter color="white" />
                </div>
                <div className="bg-dark rounded-circle p-2">
                  <FaFacebookF color="white" />
                </div>
                <div className="bg-dark rounded-circle p-2">
                  <FaPinterestP color="white" />
                </div>
                <div className="bg-dark rounded-circle p-2">
                  <FaInstagram color="white" />
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="my-5">
            <Col md={3}>
              <h5
                style={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  lineHeight: "2rem"
                }}
              >
                Buy movie tickets easily with Aovis system nationwide
              </h5>
              <Button
                style={{
                  backgroundColor: "#e26d2d",
                  border: "none",
                  padding: "10px 25px"
                }}
              >
                Get Your Ticket
              </Button>
            </Col>
            <Col md={3}>
              <h6
                style={{
                  color: "#e26d2d",
                  borderBottom: "2px solid #e26d2d",
                  display: "inline-block",
                  fontSize: "1.4rem"
                }}
              >
                Movies
              </h6>
              <ul
                className="list-unstyled mt-3"
                style={{
                  color: "#999",
                  fontSize: "1rem",
                  lineHeight: "2.5rem"
                }}
              >
                <li>Action</li>
                <li>Adventure</li>
                <li>Animation</li>
                <li>Comedy</li>
                <li>Crime</li>
              </ul>
            </Col>

            <Col md={3}>
              <h6
                style={{
                  color: "#e26d2d",
                  borderBottom: "2px solid #e26d2d",
                  display: "inline-block",
                  fontSize: "1.4rem"
                }}
              >
                Links
              </h6>
              <ul
                className="list-unstyled mt-3"
                style={{
                  color: "#999",
                  fontSize: "1rem",
                  lineHeight: "2.5rem"
                }}
              >
                <li>About</li>
                <li>My Account</li>
                <li>News</li>
                <li>Latest Events</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col md={3}>
              <h6
                style={{
                  color: "#e26d2d",
                  borderBottom: "2px solid #e26d2d",
                  display: "inline-block",
                  fontSize: "1.4rem"
                }}
              >
                Newsletter
              </h6>
              <p className="mt-3" style={{ color: "#999", fontSize: "1rem" }}>
                Subscribe to Leitmotif newsletter this very day.
              </p>

              <Form className="d-flex flex-column gap-2">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  style={{
                    borderRadius: 0,
                    padding: "1rem",
                    margin: "1.4rem 0",
                    border: "none"
                  }}
                />

                <Form.Check
                  type="checkbox"
                  label="I agree to all terms and policies of the company"
                  style={{ color: "#999", fontSize: "14px" }}
                />
              </Form>
            </Col>
          </Row>

          <Row>
            <Col
              className="text-center"
              style={{
                color: "#666",
                fontSize: "1.1rem",
                marginBottom: "1rem"
              }}
            >
              © Copyright 2023 by Ovatheme.com
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
