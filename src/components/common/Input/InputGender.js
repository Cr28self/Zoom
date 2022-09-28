const InputGender = (props) => {
  
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">성별</h6>
      <input
      type="radio"
      name="gender"
      value="남"
      checked={props.selected === "남"}
      onChange={props.onChange}
    />
    남
    <input
      type="radio"
      name="gender"
      value="여"
      checked={props.selected === "여"}
      onChange={props.onChange}
    />
    여
      
    </>
  );
};
export default InputGender;
