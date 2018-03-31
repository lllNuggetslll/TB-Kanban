import React from "react";
import Proptypes from "prop-types";

import KanBanColumnHeader from "./KanBanColumnHeader";
import KanBanCard from "./KanBanCard";

const columnContainer = {
  padding: 12.5,
  width: "25%"
};

const KanBanColumn = ({ name, columnIndex, addColumn, cards, addCard }) => {
  return (
    <div style={columnContainer}>
      <KanBanColumnHeader
        name={name}
        columnIndex={columnIndex}
        addColumn={addColumn}
      />
      {cards &&
        cards.map((message, index) => {
          return <KanBanCard key={index} message={message} />;
        })}
      {columnIndex !== null && (
        <div onClick={() => addCard(window.prompt("add card"), columnIndex)}>
          + card
        </div>
      )}
    </div>
  );
};
KanBanColumn.proptypes = {
  name: Proptypes.string.isRequired,
  columnIndex: Proptypes.number,
  addColumn: Proptypes.func.isRequired,
  cards: Proptypes.array,
  addCard: Proptypes.func.isRequired
};

export default KanBanColumn;
