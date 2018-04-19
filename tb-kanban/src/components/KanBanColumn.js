import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import KanBanColumnHeader from "./KanBanColumnHeader";
import KanBanCard from "./KanBanCard";

const ColumnContainer = styled.div`
  padding: 12.5px;
  width: 25%;
`;

export default class KanBanColumn extends React.Component {
  render() {
    const {
      columnName,
      columnColor,
      columnIndex,
      cards,
      addCard,
      moveCard
    } = this.props;

    return (
      <ColumnContainer>
        <KanBanColumnHeader
          columnName={columnName}
          columnColor={columnColor}
          columnIndex={columnIndex}
        />
        {cards &&
          cards.map((message, index) => {
            return (
              <KanBanCard
                key={index}
                message={message}
                moveCard={moveCard}
                columnIndex={columnIndex}
                cardIndex={index}
              />
            );
          })}
        {columnIndex !== null && (
          <div onClick={() => addCard(window.prompt("add card"), columnIndex)}>
            + card
          </div>
        )}
      </ColumnContainer>
    );
  }
}
KanBanColumn.proptypes = {
  columnName: Proptypes.string.isRequired,
  columnColor: Proptypes.string.isRequired,
  columnIndex: Proptypes.number,
  cards: Proptypes.array,
  addCard: Proptypes.func.isRequired,
  moveCard: Proptypes.func.isRequired
};
