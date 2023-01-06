import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import { ViewButton } from "../components/index";

export const DisplayContent = ({ route }) => {
  const [data, setData] = useState({
    answerDoc: [],
    markDoc: [],
    text: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ids, setIds] = useState({
    markId: null,
    answerId: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getTextData = async () => {
      try {
        setIsLoading(true);

        let result = await axios.get(`/api/${route}`);
        if (result.status !== 200) {
          alert(`Unable to retrieve text from database`);
        } else {
          const { answerDoc, markDoc } = result.data;
          if (answerDoc && markDoc) {
            setData((data) => ({
              ...data,
              answerDoc,
              markDoc,
            }));
          }
          setData((data) => ({
            ...data,
            text: result.data,
          }));
        }
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };
    getTextData();
  }, []);

  const deleteItem = async (e, id) => {
    const doc = e.target.name;
    const deleteData = await axios.delete(`/api/all-uploads/${doc}/${id}`);
    if (deleteData) {
      // if data was successfully deleted from database
      if (doc === "answerSheet") {
        const updatedDoc = data.answerDoc.filter((el) => id !== el._id);
        setData({
          ...data,
          answerDoc: updatedDoc,
        });
      } else {
        const updatedDoc = data.markDoc.filter((el) => id !== el._id);
        setData({ ...data, markDoc: updatedDoc });
      }
    }
  };

  if (isLoading) {
    return (
      <Player
        autoplay
        loop
        mode="normal"
        src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION_ONE}
        speed="1"
        style={{ width: "70%" }}
      ></Player>
    );
  }

  return (
    <>
      {data.answerDoc.length || data.markDoc.length ? (
        <>
          {data.answerDoc ? (
            <>
              <P>Select the answer documents that you would like to grade</P>
              <p>
                You can click on a document's id or filename to view its text
              </p>
              {data.answerDoc.map(({ _id, page }) => (
                <List key={_id}>
                  {/* <ListItem /> */}
                  <input
                    type="radio"
                    name="answerSheet"
                    value={ids.answerId}
                    onChange={(e) =>
                      e.target.checked
                        ? setIds((ids) => ({ ...ids, answerId: _id }))
                        : setIds((ids) => ({ ...ids, answerId: null }))
                    }
                  />
                  <Link to={`/texts/${_id}`}>{_id}</Link>
                  <Link to={`/texts/${_id}`}>{page.fileName}</Link>
                  <Button
                    onClick={(e) => deleteItem(e, _id)}
                    name="answerSheet"
                  >
                    Delete
                  </Button>
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
                Select the marking guide to be used for grading the selected
                answer documents
              </P>
              <p>
                You can click on a document's id or filename to view its text
              </p>
              {data.markDoc.map(({ _id, page }) => (
                <List key={_id}>
                  <input
                    type="radio"
                    name="markSheet"
                    value={ids.markId}
                    onChange={(e) =>
                      e.target.checked
                        ? setIds((ids) => ({ ...ids, markId: _id }))
                        : setIds((ids) => ({ ...ids, markId: null }))
                    }
                  />
                  <Link to={`/texts/${_id}`}>{_id}</Link>
                  <Link to={`/texts/${_id}`}>{page.fileName}</Link>
                  <Button onClick={(e) => deleteItem(e, _id)} name="markSheet">
                    Delete
                  </Button>
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

          {data.text.map((arr) => (
            <List key={arr._id}>
              <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
              <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
            </List>
          ))}
        </>
      )}
      <Button onClick={() => navigate("/grade")}>Go back</Button>
    </>
  );
};

// * Styled components
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  width: 90%;
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
  padding: 1rem 0.5rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem;
`;
