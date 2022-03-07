import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayArea = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    const getText = async () => {
      if (text.length === 0) {
        let result = await axios.get(`http://localhost:3001/viewText`);
        setText(result.data);
      }
    };
    getText();
  }, [text.length]);

  return (
    <>
      {text.map((result) => {
        return <p>{result.readText}</p>;
      })}
    </>
  );
};

export default DisplayArea;
