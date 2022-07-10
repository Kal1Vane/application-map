import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import ItemAdress from "../item-adress/item-adress";

export const ListAdress = React.memo(function ListAdress({ points }) {
  return points.map((item,index) => (
    <ItemAdress
      key={nanoid(10)}
      index={index} 
      props={item} 
    />
  ))
});
