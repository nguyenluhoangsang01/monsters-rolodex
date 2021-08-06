import React from "react";
import Card from "../Card";
import { CartListWrapper } from "./CartList.styles";

const CartList = ({ monsters }) => {
  return (
    <CartListWrapper>
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </CartListWrapper>
  );
};

export default CartList;
