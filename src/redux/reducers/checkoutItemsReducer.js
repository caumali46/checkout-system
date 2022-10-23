import _ from "lodash";
import { createReducer } from "@reduxjs/toolkit";
import {
  calculateTotalPurchases,
  calculateTotalPrice,
  calculateSubTotalPrice,
} from "./../utils";

const initialState = {
  data: [],
  totalPrice: 0,
  subTotalPrice: 0,
  show: false,
};

export const checkoutItemsReducer = createReducer(initialState, {
  CHECKOUT_ITEMS: (state, action) => {
    const newData = calculateTotalPurchases(action.payload);
    state.data = newData;
    state.subTotalPrice = calculateSubTotalPrice(newData);
    state.totalPrice = calculateTotalPrice(newData);
    return state;
  },
});
