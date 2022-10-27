import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import { ViewButton } from "../components/index";

export const DisplayContent = ({ route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [ids, setIds] = useState({
    markId: null,
    answerId: null,
  });
  const navigate = useNavigate();
  useEffect(() => {
    const getTextData = async () => {
      // ! TO-DO: specify collection from which to retrieve texts
      let result = await axios.get(`/api/${route}`);
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
          src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION_ONE}
          speed="1"
          style={{ width: "70%" }}
        ></Player>
      ) : (
        <>
          {data.answerDoc || data.markDoc ? (
            <>
              {data.answerDoc ? (
                <>
                  <P>
                    Select the answer documents that you would like to grade
                  </P>
                  <p>
                    You can click on a document's id or filename to view its
                    text
                  </p>
                  {data.answerDoc.map((arr) => (
                    <List key={arr._id}>
                      {/* get the id of selected list item and pass to backend to use for grading */}
                      <input
                        // type={route === "mark" ? "radio" : "checkbox"} //! use this after implementing basic checkbox select logic
                        type="checkbox"
                        name=""
                        id=""
                        onChange={(e) =>
                          e.target.checked
                            ? setIds((ids) => ({ ...ids, answerId: arr._id }))
                            : setIds((ids) => ({ ...ids, answerId: null }))
                        }
                      />
                      <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
                      <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
                    </List>
                  ))}
                </>
              ) : (
                <p>
                  No answer sheet has been uploaded.{" "}
                  <Link to="/grade">Upload one now</Link>
                </p>
              )}
              {data.markDoc ? (
                <>
                  <P>
                    Select the marking guide to be used for grading the
                    seelected answer documents
                  </P>
                  <p>
                    You can click on a document's id or filename to view its
                    text
                  </p>
                  {data.markDoc.map((arr) => (
                    <List key={arr._id}>
                      <input
                        type="checkbox"
                        name="checkbox"
                        onChange={(e) =>
                          e.target.checked
                            ? setIds((ids) => ({ ...ids, markId: arr._id }))
                            : setIds((ids) => ({ ...ids, markId: null }))
                        }
                      />
                      <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
                      <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
                    </List>
                  ))}
                </>
              ) : (
                <p>
                  No marking guide has been uploaded.{" "}
                  <Link to="/grade">Upload one now</Link>
                </p>
              )}
              <ViewButton
                children="Grade"
                path={`/viewGrade?markId=${ids.markId}&answerId=${ids.answerId}`}
              />
            </>
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
          <button onClick={() => navigate("/all-uploads")}>Go back</button>
        </>
      )}
    </>
  );
};

// * Styled components
export const List = styled.div`
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

export const P = styled.p`
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
