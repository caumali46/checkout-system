import { combineReducers } from "redux";
import { scannedItemsReducer } from './scannedItemsReducer';
import { checkoutItemsReducer } from './checkoutItemsReducer';

export const rootReducer = combineReducers({ 
  scannedItems: scannedItemsReducer,
  checkedOutItems: checkoutItemsReducer,
});