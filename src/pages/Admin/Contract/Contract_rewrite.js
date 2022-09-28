import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import InputTeacherCode from "../../../components/common/Input/InputTeacherCode";
import InputLectureTime from "../../../components/common/Input/InputLectureTime";
import InputName from "../../../components/common/Input/InputName";
import InputAgreeDate from "../../../components/common/Input/InputAgreeDate";
import SaveBtn from "../../../components/common/Button/SaveBtn";
import CancelBtn from "../../../components/common/Button/CancelBtn";

import axios from "axios";
import InputContractName from "../../../components/common/Input/InputContractName";
import * as boardApi from "../../../api/board";
const Contract_rewrite = () => {
  const history = useNavigate();


  const { teacher_code } = useParams();


  const [inputs, setInputs] = useState({
    id:'',
    teacher_code:teacher_code,
    name:'',
    contract_name:'',
    contract_file:'',
    agree_date:'',
    wdate:'',
    lecture_time:'',
  });

  const { id,name,contract_name,contract_file,agree_date,lecture_time } = inputs;
  const onChangeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log(inputs)

  };

  const fetchData = async () => {
    try {



      const { data } = await boardApi.loadUserInfo('contract',id);
      console.log(data);
      return data[0];
    } catch (e) {}
  }; //API호출 함수 정의

  useEffect(() => {
    fetchData().then((result) => {
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        id:result.id,
        name:result.name,
        contract_name:result.contract_name,
        contract_file:result.contract_file,
        agree_date:result.agree_date,
        wdate:result.wdate,
        lecture_time:result.lecture_time,
      });
    });
  }, []);

  const onSubmitHandler = async (e) => {

    e.preventDefault();


    try {
      const currentTime = new Date().toISOString().slice(0, 16); //분까지 표시
      var formData ={
        ...inputs,
        wdate:currentTime
      }

      const response = await boardApi
          .editUser('contract',id,formData);


      console.log(response);
      alert("수정되었습니다.");
      history("/contract");
    } catch (e) {
      console.log("Error >>" + e);
    }
  };

  return (
    <form>
      <div className="container-fluid px-4">
        <h1 className="mt-4">강의 계약서 수정</h1>

        <div className="card-body">
          <InputTeacherCode

              value={teacher_code}

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

          <InputAgreeDate
              onChange={onChangeHandler}
              value={agree_date}
          />
          <br />
          <br />

          <InputLectureTime
              onChange={onChangeHandler}
              value={lecture_time}
          />
          <br /><br />
  {/*        <InputContractFile
              onChange={onChangeHandler}
              value={contract_file}
          />*/}
          <br /><br />


          <SaveBtn save={onSubmitHandler}/>
          <CancelBtn go={'/contract'}/>
        </div>
      </div>
    </form>
  );
};

export default Contract_rewrite;
