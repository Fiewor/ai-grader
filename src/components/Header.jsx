import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <NavBar>
      <Link to="/">
        <BrandName>AI-Grader</BrandName>
      </Link>
      <NavLinks>
        {user ? (
          <LinkItem>
            <button onClick={onLogout}>
              <FaSignInAlt />
              Logout
            </button>
          </LinkItem>
        ) : (
          <>
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
          </>
        )}
      </NavLinks>
    </NavBar>
  );
};

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
    font-size: 2rem;
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
    font-size: 1.3rem;
  }
`;
