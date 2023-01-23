import React from "react";
import { Grid, Column, Stack, Button } from "@carbon/react";
import {
  ArrowUpRight,
  LogoGithub,
  Email,
  LogoLinkedin,
} from "@carbon/react/icons";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__header">
        <h1 className="landing-page__heading">Welcome to AI-Grader</h1>
        <h2 className="landing-page__subheading">
          Using Azure Artificial Intelligence services for text to grade
          handwritten paper-based tests.
        </h2>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__middle">
        <Grid>
          <Column lg={16} md={8} sm={4} className="landing-page__middle-row">
            <p>Try it out now</p>
            <Button element={Link} href="/droparea" renderIcon={ArrowUpRight}>
              Grader
            </Button>
          </Column>
          <Column lg={16} md={8} sm={4} className="landing-page__middle-row">
            <p>Or use just the text extraction service.</p>
            <Button kind="tertiary" renderIcon={ArrowUpRight}>
              Text Extraction
            </Button>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__footer">
        <Grid>
          <Column lg={4} md={4} sm={2} className="landing-page__footer__link">
            <p>&copy; John Fiewor {new Date().getFullYear()}</p>
          </Column>
          <Column lg={4} md={4} sm={2} className="landing-page__footer__link">
            <Link
              className=""
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:johnfiewor@gmail.com";
                e.preventDefault();
              }}
            >
              <Email size={24} />
            </Link>
          </Column>
          <Column lg={4} md={4} sm={2} className="landing-page__footer__link">
            <a
              className=""
              href="https://github.com/Fiewor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub size={24} />
            </a>
          </Column>

          <Column lg={4} md={4} sm={2} className="landing-page__footer__link">
            <a
              className=""
              href="https://www.linkedin.com/in/john-fiewor-365484127/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin size={24} />
            </a>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;
