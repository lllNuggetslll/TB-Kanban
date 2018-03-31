import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const COLORS = ["#8e6e95", "#39a59c", "#344759", "#e8741e"];

const Header = styled.div`
  height: 30px;
  background-color: ${props =>
    props.columnIndex === null ? "white" : COLORS[props.columnIndex]};
  width: 100%;
  text-align: center;
  color: "white";
  line-height: 30px;
  border: ${props => props.columnIndex === null && "1px dotted black;"};
`;

const KanBanColumnHeader = ({ name, columnIndex, addColumn }) => {
  return (
    <Header
      columnIndex={columnIndex}
      onClick={() => addColumn && addColumn(window.prompt("Enter Name"))}
    >
      {name}
    </Header>
  );
};
KanBanColumnHeader.proptypes = {
  name: Proptypes.string.isRequired,
  columnIndex: Proptypes.number,
  addColumn: Proptypes.func.isRequired
};

export default KanBanColumnHeader;
