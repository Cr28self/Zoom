const InputPassword = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">비밀번호</h6>
      <input
        type="password"
        className="form-control"
        id="Pwd"
        placeholder="비밀번호"
        value={props.value}

        name="password"
        maxLength="16"
        required="required"
        onChange={props.onChange}
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$"
        style={{ width: "300px", display: "inline-block" }}
      ></input>
      <span style={{ display: "inline-block" }}>
        (최소 8자리에서 최대 16자리까지 숫자, 영문, 특수문자 각 1개 이상 포함)
      </span>
    </>
  );
};

export default InputPassword;
