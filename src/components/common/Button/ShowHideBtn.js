import { useState } from "react";

const ShowHideBtn = (props) => {
  const [show, isShow] = useState(false);

  return (
    <>
      {show === false ? <span className="password">*****</span> : props.cell}
      <br />
      <button
        className="btn btn-sm btn-outline-info"
        onClick={() => {
          isShow(!show);
        }}
      >
        {show === false ? "보기" : "숨기기"}
      </button>
    </>
  );
};

export default ShowHideBtn;
