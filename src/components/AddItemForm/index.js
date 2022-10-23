import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { scanNewItem } from "../../redux/actions";
import './index.scss';

const AddItemForm = (props) => {
  const [newItem, setNewItem] = useState("");
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.scanNewItem({
      id: uuid(),
      code: newItem,
    });
    setNewItem("");
  };
  return (
    <React.Fragment>
      <div className="max-w-2xl mx-auto container">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <label htmlFor="voice-search" className="sr-only">
            Enter Code
          </label>
          <div className="relative w-full">
            <input
              type="text"
              name=""
              value={newItem}
              id="voice-search"
              className="shadow-md sm:rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter item code..."
              required=""
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enter
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  scanNewItem: (newData) => dispatch(scanNewItem(newData)),
});
export default connect(null, mapDispatchToProps)(AddItemForm);
