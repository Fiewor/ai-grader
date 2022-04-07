import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    padding: 1rem 0;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  p {
    padding: 1rem 0;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  a {
    text-decoration: none;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
`;

const HeadingText = styled.h1`
  padding: 0.3rem 1rem;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #959595;
  color: white;
  width: 100vw;
  padding: 10vh 2rem;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  p {
    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-around;
  padding: 1rem 0;
  a {
    background: #5e5e5e;
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    :hover {
      cursor: pointer;
    }
  }
`;

export const LandingPage = () => {
  return (
    <Home>
      <div>
        <HeadingText>Welcome to AI-Grader!</HeadingText>
        <p>
          AI-Grader is a solution that uses artificial intelligence to grade
          paper-based tests.
        </p>
        <DetailsSection>
          <p>
            AI-Grader uses state-of-the-art Artificial Intelligence models
            developed by engineers at Microsoft and made available though Azure
            A.I.
          </p>
          <a href="https://github.com/Fiewor/ai-grader">
            Read more on how it works
          </a>
        </DetailsSection>
        <LinkSection>
          <Link to="/grade">Try it out</Link>
        </LinkSection>
      </div>
    </Home>
  );
};
