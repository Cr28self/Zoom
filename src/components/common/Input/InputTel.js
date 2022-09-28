const InputTel = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">전화번호</h6>
      <input
        type="tel"
        className="form-control"
        pattern="^[0-9]+$"
        value={props.value}
        onChange={props.onChange}
        style={{ width: "300px", display: "inline-block" }}
        name="tel"
      />
      <span style={{ display: "inline-block" }}>( '-' 없이 입력해주세요.)</span>
    </>
  );
};
export default InputTel;
