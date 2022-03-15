import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

const DisplayArea = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(undefined);
  // const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    const fetchText = async () => {
      let result = await axios.get(`http://localhost:3001/viewText`);
      console.log("data from axios.get: ", result);
      setText(result.data);
      console.log("text", text);
      setLoading(true);
    };
    fetchText();
  }, []);

  return (
    <div className="display-area">
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
          speed="1"
          style={{ width: "70%" }}
        ></Player>
      ) : (
        <table>
          {text.map((item) => {
            return item.readText.map((t, i) => {
              if (/parents/i.test(`${t}`)) i = `${i}p`;
              if (/sw/i.test(`${t}`)) i = `${i}s`;
              if (/course/i.test(`${t}`)) i = `${i}n`;
              if (/phone/i.test(`${t}`)) i = `${i}p`;
              return (
                <>
                  {/(parents||sw||course||phone)/i.test(`${t}`) ? (
                    <tr>
                      <th>{`${t}`[t.length - 1] === `s` && `${t}`}</th>
                      <th>{`${t}`[t.length - 1] === `n` && `${t}`}</th>
                      <th>{`${t}`[t.length - 1] === `l` && `${t}`}</th>
                      <th>{`${t}`[t.length - 1] === `p` && `${t}`}</th>
                    </tr>
                  ) : (
                    <tr>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                    </tr>
                  )}
                </>
              );
            });
          })}
        </table>
      )}
    </div>
  );
};

export default DisplayArea;
