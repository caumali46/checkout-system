import { scannedItems } from "../constants";

const {
  ADD_NEW_ITEMS,
  REMOVE_ITEM,
  SHOW_APP_MODAL,
  CODE_DOES_NOT_EXIST,
  SHOW_DELETE_ITEM_MODAL,
} = scannedItems;

export function scanNewItem(code) {
  return {
    type: ADD_NEW_ITEMS,
    payload: code,
  };
}

export function handleRemoveItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
}

export function showAppModal(bool) {
  return {
    type: SHOW_APP_MODAL,
    payload: bool,
  };
}

export function showNotExistModal(bool) {
  return {
    type: CODE_DOES_NOT_EXIST,
    payload: bool,
  };
}

export function showDeleteModal(bool) {
  return {
    type: SHOW_DELETE_ITEM_MODAL,
    payload: bool,
  };
}
