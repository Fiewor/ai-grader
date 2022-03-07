import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Made with ❤ and React © {year}</p>
    </footer>
  );
};

export default Footer;
