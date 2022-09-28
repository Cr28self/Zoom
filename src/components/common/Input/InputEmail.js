const InputEmail = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">Email</h6>
      <input
        type="text"
        className="form-control"
        name="email"
        id="Email"
        value={props.value}
        onChange={props.onChange}
        style={{ width: "300px", display: "inline-block" }}
      />
    </>
  );
};

export default InputEmail;
