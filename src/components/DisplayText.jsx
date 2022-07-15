import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 0.3rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  height: 100%;
  &:first-of-type {
    margin-top: 3rem;
  }
`;

const P = styled.p`
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DisplayText = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    const getTextData = async () => {
      // ! TO-DO: specify collection from which to retrieve texts
      let result = await axios.get(`/api/texts`);
      if (result.status !== 200) {
        alert(`Unable to retrieve text from database`);
      } else {
        setData(result.data);
        setLoading(true);
      }
    };
    getTextData();
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
        <>
          <P>Click on a document's id or filename to view its text</P>
          {data.map((arr) => (
            <List key={arr._id}>
              <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
              <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
            </List>
          ))}
        </>
      )}
    </>
  );
};

// export { DisplayText, handlePrint, handleDownload };
