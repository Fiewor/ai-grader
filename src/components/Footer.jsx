import React from "react";
import styled from "styled-components";

const year = new Date().getFullYear();

const Foot = styled.footer`
  font-size: 0.8rem;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <Foot>
      <p>
        Made with ❤ and React by
        <A
          href="https://github.com/Fiewor"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          John Fiewor{" "}
        </A>
        © {year}
      </p>
    </Foot>
  );
};
