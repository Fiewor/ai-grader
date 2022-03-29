import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LandingPage = () => {
  return (
    <Home>
      <h1>Welcome to AI-Grader!</h1>
      <p>
        AI-Grader is a solution that uses artificial intelligence to grade
        answer booklets
      </p>
      <a href="https://github.com/Fiewor/ai-grader">How it works</a>
      <Link to="/grade">Try it out</Link>
    </Home>
  );
};
