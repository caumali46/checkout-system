import { priceList } from "../constants";
import _ from "lodash";
import { createReducer } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "./../utils";

const initialState = {
  data: [],
  totalPrice: 0,
  show: false,
  notFoundModalShow: false,
  deleteModalShow: false,
};

export const scannedItemsReducer = createReducer(initialState, {
  ADD_NEW_ITEMS: (state, action) => {
    const getMatchedItem = (newItem) => {
      const filtered = priceList.filter((item) => item.code === newItem.code);
      return filtered.map((item) => ({ ...item, id: newItem.id }));
    };
    const matchedItems = getMatchedItem(action?.payload);

    if (!matchedItems?.length) {
      state.notFoundModalShow = true;
    }
    const newData = [...state.data, ...matchedItems];
    state.data = newData;
    state.totalPrice = calculateTotalPrice(newData);
    return state;
  },
  REMOVE_ITEM: (state, action) => {
    const removeItem = (id) => state.data.filter((item) => item?.id !== id);
    const data = removeItem(action?.payload);

    state.data = data;
    state.deleteModalShow = false;
    state.totalPrice = calculateTotalPrice(data);
    return state;
  },
  SHOW_APP_MODAL: (state, action) => {
    state.show = action.payload;
  },
  CODE_DOES_NOT_EXIST: (state, action) => {
    state.notFoundModalShow = action.payload;
  },
  SHOW_DELETE_ITEM_MODAL: (state, action) => {
    state.deleteModalShow = action.payload;
  },
});
