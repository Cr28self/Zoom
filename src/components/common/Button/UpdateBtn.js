import { Link, useNavigate, useLocation } from "react-router-dom";
import { UpdateIcon } from "../Icons";

const UpdateBtn = (props) => {
  const location = useLocation();
  const history = useNavigate();



  const params =
    location.pathname === "/contract" ? props.row.teacher_code : props.row.id;

  const clickUpdateHandler = () => {

    history(`${location.pathname}-rewrite/${params}`);
  };

  return (
    <button
      className="btn btn-outline-primary btn-xs btn-space-right"
      onClick={clickUpdateHandler}
    >
      <UpdateIcon />


    </button>
  );
};

export default UpdateBtn;
