import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  height: 30px;
  background-color: #1683fb;
  margin: 5px;
  justify-content: space-between;
  line-height: 30px;
  color: white;
  padding: 5px;
`;

const KanBanCard = ({ message, moveCard, columnIndex, cardIndex }) => {
  return (
    <Card>
      {columnIndex !== 0 ? (
        <div onClick={() => moveCard(cardIndex, columnIndex, columnIndex - 1)}>
          {"<"}
        </div>
      ) : (
        <div />
      )}

      {message}

      {columnIndex !== 3 ? (
        <div onClick={() => moveCard(cardIndex, columnIndex, columnIndex + 1)}>
          {">"}
        </div>
      ) : (
        <div />
      )}
    </Card>
  );
};
KanBanCard.proptypes = {
  message: Proptypes.string.isRequired,
  moveCard: Proptypes.func.isRequired,
  columnIndex: Proptypes.number,
  cardIndex: Proptypes.number
};

export default KanBanCard;
