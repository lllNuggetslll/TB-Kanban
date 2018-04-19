import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import KanBanColumn from "./KanBanColumn";
import * as actions from "../actions/kanBanActions";

const Container = styled.div`
  display: flex;
  padding: 12.5px;
`;

class KanBanContainer extends React.Component {
  handleAddColumn = name => {
    name && this.props.actions.addColumn(name);
  };

  handleMoveCard = (cardIndex, currentColumn, targetColumn) => {
    this.props.actions.moveCard(cardIndex, currentColumn, targetColumn);
  };

  handleAddCard = (text, index) => {
    text && this.props.actions.addCard(text, index);
  };

  render() {
    const { columns } = this.props;

    return (
      <Container>
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
  actions: Proptypes.shape({
    addCard: Proptypes.func.isRequired,
    moveCard: Proptypes.func.isRequired
  })
};

const mapStateToProps = state => {
  return {
    columns: state.kanBanReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KanBanContainer);
