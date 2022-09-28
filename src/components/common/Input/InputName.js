const InputName = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">이름</h6>
      <input
        type="text"
        className="form-control"
        id="Lname"
        name="name"
        value={props.value}

        maxLength="10"
        placeholder="이름"
        required="required"
        onChange={props.onChange}
        style={{ width: "300px" }}
      />
    </>
  );
};

export default InputName;
