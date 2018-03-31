import * as types from "./actionTypes";

export const addCard = (text, columnIndex) => {
  return {
    type: types.ADD_CARD,
    payload: {
      text,
      columnIndex
    }
  };
};

export const moveCard = (text, prevColumn, nextColumn) => {};

export const removeCard = (text, column) => {};

export const addColumn = name => {
  return {
    type: types.ADD_COLUMN,
    payload: name
  };
};
