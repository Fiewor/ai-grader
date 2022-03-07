import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>
        Made with ❤ and React by
        <a href="https://github.com/Fiewor"> John Fiewor </a>© {year}
      </p>
    </footer>
  );
};

export default Footer;
