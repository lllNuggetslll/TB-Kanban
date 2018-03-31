import React from "react";
import Proptypes from "prop-types";

const card = {
  height: 30,
  backgroundColor: "ivory",
  margin: 5
};

const KanBanCard = ({ message }) => {
  return <div style={card}>{message}</div>;
};
KanBanCard.proptypes = {
  message: Proptypes.string.isRequired
};

export default KanBanCard;
