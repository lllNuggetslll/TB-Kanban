import React from "react";
import Proptypes from "prop-types";

const COLORS = ["#8e6e95", "#39a59c", "#344759", "#e8741e"];

const header = columnIndex => ({
  height: 30,
  backgroundColor: columnIndex === null ? "black" : COLORS[columnIndex],
  width: "100%",
  textAlign: "center",
  color: "white",
  lineHeight: 2
});

const KanBanColumnHeader = ({ name, columnIndex, addColumn }) => {
  return (
    <div
      style={header(columnIndex)}
      onClick={() => addColumn && addColumn(window.prompt("Enter Name"))}
    >
      {name}
    </div>
  );
};
KanBanColumnHeader.proptypes = {
  name: Proptypes.string.isRequired,
  columnIndex: Proptypes.number,
  addColumn: Proptypes.func.isRequired
};

export default KanBanColumnHeader;
