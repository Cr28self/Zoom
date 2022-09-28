import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DeleteIcon } from "../Icons";
import DeleteModal from "../Modal/DeleteModal";

import * as boardApi from "../../../api/board";

const DeleteBtn = (props) => {
  const location = useLocation();


  const history = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteData = async () => {
    try {
      setShow(true);
      const data = await boardApi.deleteUser(location.pathname,props.row.id);
      alert("삭제되었습니다.");
      window.location.href = `${location.pathname}`;
    } catch {
      // 오류 발생시 실행
    }
  };

  return (
    <>
      <button className="btn btn-outline-danger btn-xs btn-space-left" onClick={handleShow}>
        <DeleteIcon />


      </button>
      <DeleteModal
        show={show}
        onHide={handleClose}
        clickNo={handleClose}
        clickYes={deleteData}
      />
    </>
  );
};
export default DeleteBtn;
