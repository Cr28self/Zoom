import CancelModal from "../Modal/CancelModal";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const CancelBtn = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const navigate = useNavigate();

  const cancelHandler = (e) => {
    e.preventDefault();
      navigate(-1)
  };

  return (
    <>
      <button
        type="button"
        id="Cancel"
        className="btn btn-danger btn-xs"
        onClick={handleShow}
      >
        취소
      </button>
      <CancelModal
        show={show}
        onHide={handleClose}
        clickNo={handleClose}
        clickYes={cancelHandler}
      />
    </>
  );
};
export default CancelBtn;
