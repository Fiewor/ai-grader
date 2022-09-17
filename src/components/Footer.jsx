import React from "react";
import styled from "styled-components";

const year = new Date().getFullYear();

const Foot = styled.footer`
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  bottom: 0;
  padding: 1rem 0;
  margin-top: 2rem;
  font-size: 1rem;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <Foot>
      <p>
        Made with ❤ and React by
        <Anchor
          href="https://github.com/Fiewor"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          John Fiewor{" "}
        </Anchor>
        © {year}
      </p>
    </Foot>
  );
};
