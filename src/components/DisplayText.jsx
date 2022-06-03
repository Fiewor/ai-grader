import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

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
      setText(result.data.page);
      setLoading(true);
    };
    getText();

    // return () => {
    //   setText([]);
    //   setLoading(false);
    // };
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
        text.map((block, id) => <p key={id}>{block.text}</p>)
      )}
    </>
  );
};
