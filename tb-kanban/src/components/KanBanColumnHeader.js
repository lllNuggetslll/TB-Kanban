import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Header = styled.div`
  height: 30px;
  background-color: ${props => props.columnColor};
  width: 100%;
  text-align: center;
  color: white;
  line-height: 30px;
`;

const KanBanColumnHeader = ({
  columnName,
  columnColor,
  columnIndex,
  addColumn
}) => {
  return (
    <Header
      columnIndex={columnIndex}
      columnColor={columnColor}
      onClick={() => addColumn && addColumn(window.prompt("Enter Name"))}
    >
      {columnName}
    </Header>
  );
};
KanBanColumnHeader.proptypes = {
  columnName: Proptypes.string.isRequired,
  columnIndex: Proptypes.number.isRequired,
  columnIndex: Proptypes.number.isRequired,
  addColumn: Proptypes.func.isRequired
};

export default KanBanColumnHeader;
