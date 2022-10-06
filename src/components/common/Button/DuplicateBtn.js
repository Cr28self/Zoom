import { useState } from "react";

const DuplicateBtn = ({check}) => {

  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={check}
    >
      중복확인
    </button>
  );
};

export default DuplicateBtn;
