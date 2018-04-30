import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import KanBanColumn from "./KanBanColumn";
import { moveCard, addCard } from "../actions/kanBanActions";

const Container = styled.div`
  margin: auto;
  width: auto;
  height: 2000px;
  background-color: yellow;
`;

const ColumnContainer = styled.div`
  display: flex;
  padding: 12.5px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  padding: 25px;
`;

class KanBanContainer extends React.Component {
  handleMoveCard = (cardIndex, currentColumn, targetColumn) => {
    this.props.moveCard(cardIndex, currentColumn, targetColumn);
  };

  handleAddCard = (text, index) => {
    text && this.props.addCard(text, index);
  };

  render() {
    const { columns } = this.props;

    return (
      <Container>
        <Title>Kan Ban</Title>
        <ColumnContainer>
          {columns.map((column, index) => {
            const { columnName, columnColor, cards } = column;

            return (
              <KanBanColumn
                key={index}
                columnName={columnName}
                columnColor={columnColor}
                cards={cards}
                columnIndex={index}
                addCard={this.handleAddCard}
                moveCard={this.handleMoveCard}
              />
            );
          })}
        </ColumnContainer>
      </Container>
    );
  }
}
KanBanContainer.proptypes = {
  columns: Proptypes.shape({
    columnName: Proptypes.string.isRequired,
    columnColor: Proptypes.string.isRequired,
    cards: Proptypes.array.isRequired
  }),
  addCard: Proptypes.func.isRequired,
  moveCard: Proptypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    columns: state.kanBanReducer
  };
};

export default connect(mapStateToProps, { moveCard, addCard })(KanBanContainer);
