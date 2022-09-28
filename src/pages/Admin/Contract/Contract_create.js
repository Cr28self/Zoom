import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import InputTeacherCode from "../../../components/common/Input/InputTeacherCode";
import InputName from "../../../components/common/Input/InputName";
import InputContractName from "../../../components/common/Input/InputContractName";
import InputAgreeDate from "../../../components/common/Input/InputAgreeDate";
import InputLectureTime from "../../../components/common/Input/InputLectureTime";
import InputContractFile from "../../../components/common/Input/InputContractFile";
import SaveBtn from "../../../components/common/Button/SaveBtn";
import CancelBtn from "../../../components/common/Button/CancelBtn";
import * as boardApi from "../../../api/board";
import {createContract} from "../../../api/board";


export default function Contract_create() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    teacher_code:'',
    name:'',
    contract_name:'',
    contract_file:'',
    agree_date:'',
    wdate:'',
    lecture_time:'',
  });

  const [content, setContent] = useState("");
  const onChangeFile = (e) => {
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      contract_file: e.target.files[0] // name 키를 가진 값을 value 로 설정
    });
  };

  const { teacher_code,name,contract_name,contract_file,agree_date,wdate,lecture_time } = inputs;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      for( var key in inputs ){
        formData.append( key , inputs[key])
      }
      console.log(formData)



      const response = await boardApi.createContract("contract", formData);

      console.log(response);

      alert("생성 되었습니다.");
      history("/contract");
    } catch (e) {
      console.log("Error >>" + e);
    }
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log(inputs)

  };

  return (
    <form>
      <div className="container-fluid px-4">
        <h1 className="mt-4">강의 계약서 추가</h1>
        <br />

        <div className="card-body">
          <InputTeacherCode
              mode={"create"}
              value={teacher_code}
              onChange={onChangeHandler}
          />
          <br />
          <InputName
              onChange={onChangeHandler}
              value={name}
          />
          <br />
          <InputContractName
              onChange={onChangeHandler}
              value={contract_name}
          />
          <br />

          <InputAgreeDate
              onChange={onChangeHandler}
              value={agree_date}
          />
          <br /><br />

          <br /><br />
          <InputLectureTime
              onChange={onChangeHandler}
              value={lecture_time}
          />
          <br /><br />
          <InputContractFile
              onChange={onChangeFile}

          />
          <br /><br />

          <SaveBtn save={onSubmitHandler}/>
          <CancelBtn go={'contract'} />
        </div>
      </div>

    </form>
  );
}
