import React from "react";

const card = {
  height: 30,
  backgroundColor: "ivory",
  margin: 5
};

const KanBanCard = ({ message }) => {
  return <div style={card}>{message}</div>;
};

export default KanBanCard;
