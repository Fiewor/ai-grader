import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, UnorderedList, ListItem } from "@carbon/react";

const List = ({ doc, sheet }) => {
  const [ids, setIds] = useState({
    markIds: [],
    answerIds: [],
  });

  console.log("ids: ", ids);

  return (
    <UnorderedList className="list">
      {doc?.map(({ _id, page: { fileName } }, i) => {
        const idKey = sheet === "markSheet" ? "markIds" : "answerIds";
        return (
          <ListItem
            key={_id}
            className="list-item"
            style={{ listStyleType: "none" }}
          >
            <Checkbox
              name={idKey}
              id={_id}
              labelText={fileName}
              onChange={(event, { checked, id }) =>
                setIds((ids) => ({
                  ...ids,
                  [idKey]: checked
                    ? [...ids[idKey], id]
                    : [idKey].filter((ind) => ind !== id),
                }))
              }
            />

            {/* add link so user can view */}
            {/* <Link to={`/texts/${_id}`}>{fileName}</Link> */}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default List;
