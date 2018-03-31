import * as types from "../actions/actionTypes";

export default (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case types.ADD_COLUMN:
      return payload;
    case types.ADD_CARD:
      return payload;
    default:
      return state;
  }
};
