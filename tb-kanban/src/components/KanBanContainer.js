import React from "react";
import KanBanColumn from "./KanBanColumn";

const NAMES = ["Winnie", "Bob", "Thomas", "George"];

const container = {
  display: "flex",
  padding: 12.5
};

const KanBanContainer = () => {
  return (
    <div style={container}>
      {NAMES.map((name, index) => {
        return <KanBanColumn key={index} name={name} columnIndex={index} />;
      })}
    </div>
  );
};

export default KanBanContainer;
