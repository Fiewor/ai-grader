import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

const TextContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  padding: 2rem;
`;

const Text = styled.p`
  font-size: 0.8rem;
  padding: 0.2rem 2rem;
  border-bottom: 0.1px solid black;
  &:first-child {
    border-top: 0.1px solid black;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const DisplayText = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    const getText = async () => {
      let result = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_LIVE_API_URL
            : process.env.REACT_APP_LOCAL_API_URL
        }viewText`
      );
      setText(result.data.page.rawText);
      setLoading(true);
    };
    getText();
  }, []);

  return (
    <>
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION}
          speed="1"
          style={{ width: "70%" }}
        ></Player>
      ) : (
        <TextContainer>
          {text.map((line, id) => (
            <Text key={id}>{line}</Text>
          ))}
        </TextContainer>
      )}
    </>
  );
};
