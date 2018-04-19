import * as types from "../actions/actionTypes";

const COLORS = ["#8e6e95", "#39a59c", "#344759", "#e8741e"];

const INITIAL_STATE = ["Backlog", "Current Task", "Review", "QA Ready"].map(
  (column, index) => ({
    columnName: column,
    columnColor: COLORS[index],
    cards: []
  })
);

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.ADD_CARD:
      return [...payload];
    case types.MOVE_CARD:
      return [...payload];
    default:
      return state;
  }
};
