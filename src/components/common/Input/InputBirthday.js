const InputBirthday = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">생일</h6>
      <input
        type="date"
        name="birthday"
        style={{ width: "300px" }}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};
export default InputBirthday;
