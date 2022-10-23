import * as React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import {
  checkoutItems,
  handleRemoveItem,
  showNotExistModal,
  showDeleteModal,
} from "../../redux/actions";
import AppModal from "./../AppModal";
import NoContent from "./NoContent";
import "./styles.scss";

const ScannedItems = (props) => {
  let navigate = useNavigate();
  const [toRemoveID, setToRemoveItemID] = React.useState("");

  const {
    notFoundModalShow,
    showNotExistModal,
    deleteModalShow,
    showDeleteModal,
    handleCheckout,
    scannedItems: { data, totalPrice },
  } = props;

  const handleCheckoutClick = () => {
    handleCheckout();
    navigate("/checkout");
  };
  return (
    <React.Fragment>
      <div className="max-w-2xl mx-auto" id="scanned-items">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-left uppercase">Scanned Items</h2>
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
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">
                      <b>{item.code}</b>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          setToRemoveItemID(item.id);
                          showDeleteModal(true);
                        }}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <NoContent />
              )}
            </tbody>
            <tfoot>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={2}></td>
                <th className="px-6 py-4 text-right">Current Total:</th>
                <td className="px-6 py-4">${totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleCheckoutClick}
            className=" py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </button>
        </div>
      </div>
      {notFoundModalShow && (
        <AppModal
          showModal={notFoundModalShow}
          showAppModal={showNotExistModal}
          content={
            <>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Item does not exist. Please try again!
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => showNotExistModal(false)}
                >
                  Ok
                </Button>
              </div>
            </>
          }
        />
      )}
      {deleteModalShow && (
        <AppModal
          showModal={deleteModalShow}
          showAppModal={showDeleteModal}
          content={
            <>
              {" "}
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to remove this item?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => props.handleRemoveItem(toRemoveID)}
                >
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => showDeleteModal(false)}>
                  No, cancel
                </Button>
              </div>
            </>
          }
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  scannedItems: state.scannedItems,
  notFoundModalShow: state.scannedItems.notFoundModalShow,
  deleteModalShow: state.scannedItems.deleteModalShow,
});
const mapDispatchToProps = (dispatch) => ({
  handleCheckout: () => dispatch(checkoutItems()),
  handleRemoveItem: (id) => dispatch(handleRemoveItem(id)),
  showNotExistModal: (bool) => dispatch(showNotExistModal(bool)),
  showDeleteModal: (bool) => dispatch(showDeleteModal(bool)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ScannedItems);
