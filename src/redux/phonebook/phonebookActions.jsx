// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// const addItem = (name, number) => ({
//   type: ADD_ITEM,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const addItemRequest = createAction("phonebook/addRequest");
const addItemSuccess = createAction("phonebook/addSuccess");
const addItemError = createAction("phonebook/addError");
// const deleteItem = (id) => ({
//   type: REMOVE_ITEM,
//   payload: {
//     id,
//   },
// });

const deleteItem = createAction("phonebook/remove");

const deleteItemRequest = createAction("phonebook/deleteRequest");
const deleteItemSuccess = createAction("phonebook/deleteSuccess");
const deleteItemError = createAction("phonebook/deleteError");
// const filterItem = (filter) => ({
//   type: FILTER_ITEM,
//   payload: {
//     filter,
//   },
// });

const filterItem = createAction("phonebook/filter");

const fetchItemsRequest = createAction("phonebook/fetchRequest");
const fetchItemsSuccess = createAction("phonebook/fetchSuccess");
const fetchItemsError = createAction("phonebook/fetchError");

export default {
  deleteItem,
  filterItem,

  addItemRequest,
  addItemSuccess,
  addItemError,

  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,

  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsError,
};
