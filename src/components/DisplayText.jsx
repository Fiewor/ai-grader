import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
// import { useReactToPrint } from "react-to-print";

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

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: white;
  background: rgb(28, 140, 214);
  border: none;
  box-shadow: 1px 1px 1px 1px rgb(0, 0, 0);
  &:active {
    box-shadow: 0px 0px 1px 1px rgb(0, 0, 0);
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

  const handleDownload = () => console.log("working");
  // useReactToPrint({
  //   onPrintError: (error) => console.log(error),
  //   content: () => text,
  //   removeAfterPrint: true,
  //   fonts: [
  //     {
  //       family: "Roboto Mono",
  //       source:
  //         "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap",
  //     },
  //   ],
  // });

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
        <>
          <TextContainer>
            {text.map((line, id) => (
              <Text key={id}>{line}</Text>
            ))}
          </TextContainer>
          <Button onClick={handleDownload}>Download</Button>
        </>
      )}
    </>
  );
};
