import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, UnorderedList, ListItem } from "@carbon/react";

const List = ({ doc, sheet }) => {
  const [ids, setIds] = useState({
    markIds: [],
    answerIds: [],
    isChecked: false,
  });

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
              onChange={(_, { checked, id }) => {
                setIds({
                  ...ids,
                  isChecked: checked,
                });

                setIds((ids) => ({
                  ...ids,
                  [idKey]: ids.isChecked
                    ? [...ids[idKey], id]
                    : ids[idKey].filter((val) => val !== id),
                }));
              }}
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
