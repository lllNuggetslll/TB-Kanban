import React from "react";
import KanBanColumnHeader from "./KanBanColumnHeader";
import KanBanCard from "./KanBanCard";

const columnContainer = {
  padding: 12.5,
  width: "25%"
};

export default class KanBanColumn extends React.Component {
  state = {
    messages: []
  };

  handleAddCard = message => {
    const { messages } = this.state;
    const messagesCopy = messages.slice(0);

    message && messagesCopy.push(message);

    this.setState({ messages: messagesCopy });
  };

  render() {
    const { name, columnIndex } = this.props;
    const { messages } = this.state;

    return (
      <div style={columnContainer}>
        <KanBanColumnHeader name={name} columnIndex={columnIndex} />
        {messages.map((message, index) => {
          return <KanBanCard key={index} message={message} />;
        })}
        <div onClick={() => this.handleAddCard(window.prompt("add card"))}>
          {" "}
          + card{" "}
        </div>
      </div>
    );
  }
}
