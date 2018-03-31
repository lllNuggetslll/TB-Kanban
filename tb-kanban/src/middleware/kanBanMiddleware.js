import * as types from "../actions/actionTypes";
import * as actions from "../actions/kanBanActions";

export default ({ dispatch, getState }) => {
  return next => action => {
    const { kanBanReducer } = getState();
    const kanBanCopy = kanBanReducer.slice(0);

    if (action.type === types.ADD_COLUMN) {
      kanBanCopy.push({
        name: action.payload,
        cards: []
      });
      action.payload = kanBanCopy;
    }

    if (action.type === types.ADD_CARD) {
      const { columnIndex, text } = action.payload;
      kanBanCopy[columnIndex].cards.push(text);

      action.payload = kanBanCopy;
    }

    next(action);
  };
};
