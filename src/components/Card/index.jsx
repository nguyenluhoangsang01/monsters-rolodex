import React from "react";
import { CardContent } from "./Cart.styles";

const Card = ({ monster }) => {
  return (
    <ul>
      <CardContent>
        <img
          src={`https://robohash.org/${monster.id}?set=set${monster.id}&size=180x180`}
          alt={`monster-${monster.id}`}
        />
        <h3>{monster.name}</h3>
        <p>{monster.email}</p>
      </CardContent>
    </ul>
  );
};

export default Card;
