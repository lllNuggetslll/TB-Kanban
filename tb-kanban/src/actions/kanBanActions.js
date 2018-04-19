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

export const moveCard = (cardIndex, prevColumn, nextColumn) => {
  return {
    type: types.MOVE_CARD,
    payload: {
      cardIndex,
      prevColumn,
      nextColumn
    }
  };
};
