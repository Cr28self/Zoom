const InputAgreeDate = (props) => {
    return (
      <>
        <h6 className="m-0 font-weight-bold text-primary">계약일자</h6>
        <input
          type="datetime-local"
          name="agree_date"
          style={{ width: "300px" }}
          value={props.value}
          onChange={props.onChange}
        />
      </>
    );
  };
  export default InputAgreeDate;
  