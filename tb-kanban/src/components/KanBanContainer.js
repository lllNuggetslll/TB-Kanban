import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import KanBanColumn from "./KanBanColumn";
import * as actions from "../actions/kanBanActions";

const container = {
  display: "flex",
  padding: 12.5
};

class KanBanContainer extends React.Component {
  handleAddColumn = name => {
    name && this.props.actions.addColumn(name);
  };

  handleAddCard = (text, index) => {
    text && this.props.actions.addCard(text, index);
  };

  render() {
    const { columns } = this.props;
    const addColumn = () => (
      <KanBanColumn
        name={"Add Column"}
        addColumn={this.handleAddColumn}
        columnIndex={null}
      />
    );

    return (
      <div style={container}>
        {columns.map((column, index) => {
          const { name, cards } = column;
          return (
            <KanBanColumn
              key={index}
              name={name}
              cards={cards}
              columnIndex={index}
              addCard={this.handleAddCard}
            />
          );
        })}
        {columns.length < 4 && addColumn()}
      </div>
    );
  }
}
KanBanContainer.proptypes = {
  columns: Proptypes.shape({
    name: Proptypes.string.isRequired,
    cards: Proptypes.array.isRequired
  }),
  actions: Proptypes.shape({
    addColumn: Proptypes.func.isRequired,
    addCard: Proptypes.func.isRequired
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
