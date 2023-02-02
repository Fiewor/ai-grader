import React, { createContext, useReducer, Dispatch, FC } from "react";

interface IdState {
  markIds: string[];
  answerIds: string[];
  selectedAnswerSheet: boolean;
  selectedMarkSheet: boolean;
}

interface Props {
  children: React.ReactNode;
}

interface IAction {
  type: string;
  key: string;
  id: string | number;
}

const initialIds: IdState = {
  markIds: [],
  answerIds: [],
  selectedAnswerSheet: false,
  selectedMarkSheet: false,
};

export const IdContext = createContext<IdState | null>(null);
export const IdDispatchContext = createContext<Dispatch<IAction>>(() => {});

export const IdProvider: FC<Props> = ({ children }) => {
  const [ids, dispatch] = useReducer(idReducer, initialIds);

  return (
    <IdContext.Provider value={ids}>
      <IdDispatchContext.Provider value={dispatch}>
        {children}
      </IdDispatchContext.Provider>
    </IdContext.Provider>
  );
};

// interface Ireducer {
//   (state: IdState, action: IAction) => IdState
// }

function idReducer(ids: IdState, action: IAction) {
  switch (action.type) {
    // this action is used to add or remove an id from the markIds or answerIds array
    case "TOGGLE_STORE": {
      if (action.key === "answerIds" || action.key === "markIds") {
        const key = action.key as "markIds" | "answerIds";
        // if action.id is in markIds, remove it, otherwise add it
        return {
          ...ids,
          [key]: ids[key].includes(action.id as string)
            ? ids[key].filter((val) => val !== action.id)
            : [...ids[key], action.id],
        };
      } else {
        throw new Error(
          "The 'key' property of the action must be either 'markIds' or 'answerIds'"
        );
      }
    }

    // this action is used to set the selectedAnswerSheet or selectedMarkSheet to true or false based on the length of the markIds or answerIds array i.e. if the user has selected answers or marks
    case "SET_CHECKED_SHEET": {
      if (action.key === "answerIds" || action.key === "markIds") {
        const arr = ids[action.key as "markIds" | "answerIds"];
        const key =
          action.key === "answerIds"
            ? "selectedAnswerSheet"
            : "selectedMarkSheet";
        return {
          ...ids,
          [key]: arr.length > 0,
        };
      } else {
        throw new Error(
          "The 'key' property of the action must be either 'answerIds' or 'markIds'"
        );
      }
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
