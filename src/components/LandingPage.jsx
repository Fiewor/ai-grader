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

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #959595;
  color: white;
  width: 100vw;
  padding: 3rem 2rem;
  text-align: center;
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
        <h1>Welcome to AI-Grader!</h1>
        <p>
          AI-Grader is a solution that uses artificial intelligence to grade
          handwritten answer booklets.
        </p>
        <DetailsSection>
          <p>
            AI-Grader uses state-of-the-art Artificial Intelligence models
            developed by engineers at Microsoft and made available though
            Microsoft Azure A.I.
          </p>
          {/* <p>
            This solution provides an interface through which student answer
            booklets which have been either scanned or captured as an image can
            be uploaded.

            Upon uploading of answer booklets, a marking guide (document
            containing the right answers to exam/ test questions) is also
            uploaded

            Based on keyphrases found in this marking guide, student answer
            booklets will be graded accordingly

            Results of grading can be viewed or printed as a spreadsheet or pdf
            document
          </p> */}
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
