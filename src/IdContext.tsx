import React, { createContext, useReducer, Dispatch, FC } from "react";

// types
interface IdState {
  markIds: string[];
  answerIds: string[];
  isChecked: any;
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
      if (typeof action.key === "string") {
        assertValidKey(action.key);
        return {
          ...ids,
          [action.key]: ids.isChecked
            ? [...ids[action.key], action.id]
            : ids[action.key].filter((val: string) => val !== action.id),
        };
      } else {
        throw new Error(
          "The 'key' property of the action must be of type 'string'"
        );
      }
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function assertValidKey(key: string): asserts key is keyof IdState {
  if (!(key in initialIds)) {
    throw new Error(`[${key}] is not a valid key of IdState`);
  }
}
