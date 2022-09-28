import { useState } from "react";

const DuplicateBtn = (props) => {

  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={props.check}
    >
      중복확인
    </button>
  );
};

export default DuplicateBtn;
