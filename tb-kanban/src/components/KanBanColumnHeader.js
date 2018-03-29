import React from "react";

const colors = ["#8e6e95", "#39a59c", "#344759", "#e8741e"];

const header = columnIndex => ({
  height: 30,
  backgroundColor: colors[columnIndex],
  width: "100%",
  textAlign: "center",
  color: "white",
  lineHeight: 2
});

const KanBanColumnHeader = ({ name, columnIndex }) => {
  return <div style={header(columnIndex)}>{name}</div>;
};

export default KanBanColumnHeader;
