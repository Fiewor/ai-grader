import React, { createContext, useReducer, Dispatch, FC } from "react";

interface IdState {
  markIds: string[];
  answerIds: string[];
  isChecked: boolean;
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
  isChecked: false,
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
    case "CHECKED": {
      return {
        ...ids,
        isChecked: !ids.isChecked,
      };
    }

    case "TOGGLE_STORE": {
      if (action.key === "markIds" || action.key === "answerIds") {
        const key = action.key as "markIds" | "answerIds";
        return {
          ...ids,
          [key]: ids.isChecked
            ? [...ids[key], action.id]
            : ids[key].filter((val) => val !== action.id),
        };
      } else {
        throw new Error(
          "The 'key' property of the action must be either 'markIds' or 'answerIds'"
        );
      }
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
