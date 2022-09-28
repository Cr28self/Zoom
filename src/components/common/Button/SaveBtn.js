import {useState} from "react";
import SaveModal from "../Modal/SaveModal";
import CancelModal from "../Modal/CancelModal";

const SaveBtn = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (

      <>
          <button id="Save" type="button" className="btn btn-primary btn-xs " onClick={handleShow}>
              저장
          </button>
          <SaveModal
              show={show}
              onHide={handleClose}
              clickNo={handleClose}
              save={props.save}
          />


      </>

  );
};
export default SaveBtn;
