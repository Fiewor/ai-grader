import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    text-align: center;
    padding: 1rem 0;
    margin-top: 1rem;
    font-size: 1.7rem;
    @media screen and (min-width: 768px) {
      padding: 2rem 0;
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
  padding: 2rem 1rem;
  margin: 1rem 0;
  font-family: "Raleway", sans-serif;
  @media screen and (min-width: 768px) {
    padding: 5rem 2rem;
  }
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
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  a {
    background: rgb(94, 94, 94);
    padding: 0.5rem 0.8rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px rgb(0, 0, 0);
    &:hover {
      background: rgb(94, 94, 94, 0.8);
    }
    &:active {
      box-shadow: 0px 0px 1px 0px rgb(0, 0, 0);
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
          <Link to="/text">Text-Extractor</Link>
          <Link to="/grade">Grader</Link>
        </LinkSection>
      </div>
    </Home>
  );
};
