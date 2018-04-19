import * as types from "../actions/actionTypes";

export default ({ dispatch, getState }) => {
  return next => action => {
    const { kanBanReducer } = getState();
    const kanBanCopy = kanBanReducer.slice(0);

    if (action.type === types.ADD_CARD) {
      const { columnIndex, text } = action.payload;
      kanBanCopy[columnIndex].cards.push(text);

      action.payload = kanBanCopy;
    }

    if (action.type === types.MOVE_CARD) {
      const { cardIndex, prevColumn, nextColumn } = action.payload;

      const card = kanBanCopy[prevColumn].cards.splice(cardIndex, 1);
      let targetColumn = kanBanCopy[nextColumn];

      targetColumn.cards.push(card);

      action.payload = kanBanCopy;
    }

    next(action);
  };
};
