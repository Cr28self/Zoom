const InputIdentification = (props) => {
    return (
      <>
        <h6 className="m-0 font-weight-bold text-primary">주민등록번호</h6>
        <input
          type="text"
          className="form-control"
          id="ssnum"
          name="identification_num"
          value={props.value}
          maxLength="10"
          placeholder="주민등록번호"
          required="required"
          onChange={props.onChange}
          style={{ width: "300px" }}
        />
      </>
    );
  };
  
  export default InputIdentification;
  