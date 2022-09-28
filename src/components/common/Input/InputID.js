const InputID = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">ID</h6>
      {
      props.mode ==="create"
        ? <input
        type="text"
        className="form-control"
        name="id"
        placeholder="ID"
        style={{ width: "300px", display: "inline-block"}}
        onChange={props.onChange}
        value={props.value}
        
      />
        :<input
        type="text"
        className="form-control"
        name="learner_id"
        placeholder="ID"
        style={{ width: "300px", display: "inline-block"}}
        onChange={props.onChange}
        readOnly
        defaultValue={props.id}
      />
      }
      
    </>
  );
};

export default InputID;
