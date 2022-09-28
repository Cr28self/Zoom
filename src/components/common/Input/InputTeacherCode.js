const InputTeacherCode = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">강의자 코드</h6>
        <input
          type="text"
          className="form-control"
          id="Teacher code"
          name="teacher_code"
          value={props.value}
          placeholder="강의자 코드"
          maxLength="16"
          onChange={props.onChange}
          style={{ width: "300px" }}
          readOnly={props.mode === 'create'? false: true}
        />
    </>
  );
};

export default InputTeacherCode;
