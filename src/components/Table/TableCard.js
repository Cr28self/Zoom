const TableCard = (props) => {
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      {props.children}
      {/* //사용자 정의 Wrapper컴포넌트 ( Card 컴포넌트 )열고닫는 태그 사이에 있는 값을 받음 { props.children 사용} */}
    </div>
    //Expenses나 ExpensesItem 주변에 있는 셸 역할 처럼 동작하게
  );
};

export default TableCard;
