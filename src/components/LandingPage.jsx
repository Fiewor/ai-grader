import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Raleway:wght@300&family=Roboto:wght@300&family=Roboto+Mono:ital,wght@1,300&family=Raleway:wght@300&display=swap");
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    padding: 1rem 0;
    text-align: center;
    font-size: 1.7rem;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  p {
    font-family: "Roboto Mono", monospace;
    padding: 1rem 0;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      padding: 1rem;
    }
    span {
      font-family: "Indie Flower", cursive;
    }
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #959595;
  color: white;
  width: 100vw;
  padding: 3rem 2rem;
  font-family: "Raleway", sans-serif;
  p {
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  a {
    text-align: center;
    color: black;
    font-size: 0.75rem;
    &:hover {
      color: rgba(0, 0, 0, 0.6);
    }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
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
    background: rgb(94, 94, 94);
    padding: 0.5rem 0.8rem;
    margin-bottom: 1rem;
    &:hover {
      background: rgb(94, 94, 94, 0.8);
    }
    @media screen and (min-width: 768px) {
      padding: 0.8rem 1rem;
    }
  }
`;

export const LandingPage = () => {
  return (
    <Home>
      <div>
        <h1>Welcome to AI-Grader!</h1>
        <p>
          AI-Grader is a web application that uses artificial intelligence to
          grade{" "}
          <span>
            <em>handwritten</em>
          </span>{" "}
          answer sheets.
        </p>
        <DetailsSection>
          <p>
            AI-Grader uses Microsoft Azure Cognitive Services - Computer Vision,
            Optical Character Recognition and Key Phrase Extraction...
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
