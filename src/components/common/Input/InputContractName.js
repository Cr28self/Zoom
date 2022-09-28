const InputContractName = (props) => {
    return (
      <>
        <h6 className="m-0 font-weight-bold text-primary">계약서명</h6>
        <input
          type="text"
          className="form-control"
          id="Lname"
          name="contract_name"
          value={props.value}
          maxLength="10"
          placeholder="계약서명"
          required="required"
          onChange={props.onChange}
          style={{ width: "300px" }}
        />
      </>
    );
  };
  
  export default InputContractName;
  