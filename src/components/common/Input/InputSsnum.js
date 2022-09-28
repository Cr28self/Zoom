const InputSsnum = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">주민등록번호</h6>
      <input
        type="text"
        className="form-control"
        name="ssnum"
        maxLength="16"
        defaultValue={props.Ssnum}
        readOnly
        style={{ width: "300px" }}
      />
    </>
  );
};

export default InputSsnum;
