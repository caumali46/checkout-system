import { checkedoutItems } from "../constants";
import store from "./../store";

const { CHECKOUT_ITEMS } = checkedoutItems;

export function checkoutItems() {
  const { data } = store.getState().scannedItems;
  return {
    type: CHECKOUT_ITEMS,
    payload: data
  };
}
