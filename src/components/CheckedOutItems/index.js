import * as React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { checkoutItems, handleRemoveItem } from "../../redux/actions";
import NoContent from "./NoContent";

const CheckedOutItems = (props) => {
  let navigate = useNavigate();

  const {
    checkedOutItems: { data, totalPrice, subTotalPrice },
  } = props;

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="max-w-2xl mx-auto" id="scanned-items" style={{marginTop: "100px"}}>
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-left uppercase">
            Checkout
          </h2>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 table-container">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data.map((item) => (
                  <tr
                    key={uuid()}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{item.code}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      <p>{item.name}</p>
                      <p className="text-muted">{item.description}</p>
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                  </tr>
                ))
              ) : (
                <NoContent />
              )}
            </tbody>
            <tfoot>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={1}></td>
                <th className="px-6 py-4 text-right">SubTotal:</th>
                <td className="px-6 py-4">${subTotalPrice}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={1}></td>
                <th className="px-6 py-4 text-right">Total:</th>
                <th className="px-6 py-4">${totalPrice}</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={handleBackClick}
            className=" py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back
          </button>
          <button
            type="button"
            className=" py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Proceed
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  checkedOutItems: state.checkedOutItems,
});
const mapDispatchToProps = (dispatch) => ({
  handleCheckout: (allItems) => dispatch(checkoutItems(allItems)),
  handleRemoveItem: (id) => dispatch(handleRemoveItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckedOutItems);
