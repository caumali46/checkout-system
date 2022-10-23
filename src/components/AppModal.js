import * as React from "react";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AppModal = (props) => {
  const { showModal, showAppModal } = props;
  return (
    <React.Fragment>
      <Modal
        show={showModal}
        size="md"
        popup={true}
        onClose={() => showAppModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            {props.content}
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
export default AppModal;
