import React from "react";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Box/*, Container, Row, Column, FooterLink*/ } from "../Utils/FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h3
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
      </h3>
    </Box>
  );
};
export default Footer;
