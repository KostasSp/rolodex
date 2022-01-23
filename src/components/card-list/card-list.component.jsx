import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component.jsx";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {console.log(props)}
      {props.monsters.map((el) => (
        <Card key={el.id} monster={el} />
      ))}
    </div>
  );
};
