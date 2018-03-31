import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  height: 30px;
  background-color: #1683fb;
  margin: 5px;
`;

const KanBanCard = ({ message }) => {
  return <Card>{message}</Card>;
};
KanBanCard.proptypes = {
  message: Proptypes.string.isRequired
};

export default KanBanCard;
