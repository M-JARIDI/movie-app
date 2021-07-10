import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Box, Container, Row, Column, FooterLink } from "../Utils/FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "yellow",
          textAlign: "center",
          marginTop: "-50px",
          marginBottom: "20px",
        }}
      >
        Open source by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mustapha-jaridi"
        >
          Mustapha Jaridi
        </a>{" "}
        © 2021
      </h1>
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Modes de lecture</FooterLink>
            <FooterLink href="#">Mentions légales</FooterLink>
            <FooterLink href="#">Programmes</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Centre d'aide</FooterLink>
            <FooterLink href="#">Recrutement</FooterLink>
            <FooterLink href="#">Conditions</FooterLink>
            <FooterLink href="#">Nous contacter</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Compte</FooterLink>
            <FooterLink href="#">Cartes cadeaux</FooterLink>
            <FooterLink href="#">Confidentialité</FooterLink>
            <FooterLink href="#">Test de vitesse</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Social Media</FooterLink>
            <FooterLink href="#">
              <FacebookIcon />
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="#">
              <InstagramIcon />
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </FooterLink>
            <FooterLink href="#">
              <LinkedInIcon />
              <span style={{ marginLeft: "10px" }}>LinkedIn</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
