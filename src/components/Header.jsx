import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const NavBar = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  font-family: "Roboto", sans-serif;
  background: #000;
  color: rgb(255, 255, 255);
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const BrandName = styled.nav`
  font-size: 1.5rem;
  padding-left: 3vw;
  color: rgb(255, 255, 255);
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const NavLinks = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const LinkItem = styled.li`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Header = () => {
  return (
    <NavBar>
      <Link to="/">
        <BrandName>AI-Grader</BrandName>
      </Link>
      <NavLinks>
        <Link to="/">
          <LinkItem>Home</LinkItem>
        </Link>
        <Link to="/login">
          <LinkItem>
            <FaSignInAlt />
            Login
          </LinkItem>
        </Link>
        <Link to="/register">
          <LinkItem>
            <FaUser />
            Register
          </LinkItem>
        </Link>
      </NavLinks>
    </NavBar>
  );
};
