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
  height: 100%;
  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const DisplayText = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    const getTextData = async () => {
      let result = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_LIVE_API_URL
            : process.env.REACT_APP_LOCAL_API_URL
        }texts`
      );
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
