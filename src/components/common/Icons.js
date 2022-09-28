import { FaTools } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaColumns, FaBookOpen } from "react-icons/fa";

export const UpdateIcon = () => {
  return <FaTools className="icon" />;
};

export const DeleteIcon = () => {
  return <FaTrashAlt className="icon" />;
};

export const LearnerIcon = () => {
  return <FaColumns className="icon" style={{ display: "inline-block" }} />;
};

export const TeacherIcon = () => {
  return <FaBookOpen className="icon" style={{ display: "inline-block" }} />;
};
