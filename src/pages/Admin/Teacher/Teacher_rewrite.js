import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import InputTeacherCode from "../../../components/common/Input/InputTeacherCode";
import InputID from "../../../components/common/Input/InputID";
import InputPassword from "../../../components/common/Input/InputPassword";
import InputName from "../../../components/common/Input/InputName";
import InputEmail from "../../../components/common/Input/InputEmail";
import InputTel from "../../../components/common/Input/InputTel";
import InputEtc from "../../../components/common/Input/InputEtc";
import SaveBtn from "../../../components/common/Button/SaveBtn";
import CancelBtn from "../../../components/common/Button/CancelBtn";
import InputGender from "../../../components/common/Input/InputGender";

import * as boardApi from "../../../api/board";


import InputIdentification from "../../../components/common/Input/InputIdentification";



const Teacher_rewrite = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    teacher_code:'',
    id:id,
    password:'',
    name:'',
    gender:'',
    identification_num:'',
    tel:'',
    email:'',
    etc:''
  });
  const { teacher_code,password,name,gender,identification_num,tel,email,etc } = inputs;
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
      const { data } = await boardApi.loadUserInfo('teacher',id);
      return data[0];
    } catch (e) {
      console.log(e);
    }
  }; //API호출 함수 정의

  useEffect(() => {
    fetchData().then((result) => {
      setInputs({
        ...inputs,
        teacher_code:result.teacher_code,
        password:result.password,
        name:result.name,
        gender:result.gender,
        identification_num:result.identification_num,
        tel:result.tel,
        email:result.email,
        etc:result.etc
      });
    });
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('modal!!')

    try {
      const response = await boardApi
          .editUser('teacher',id,inputs);

      console.log(response);
      alert("수정되었습니다.");
      history("/teacher");
    } catch (e) {
      console.log("Error >>" + e);
    }
  };

  return (
    <form >
      <div className="container-fluid px-4">
        <h1 className="mt-4">강의자 수정</h1>

        <div className="card-body">
          <InputTeacherCode value={teacher_code} />
          <InputID id={id} />
          <br />
          <InputPassword onChange={onChangeHandler}
                         value={password} />
          <br />
          <br />
          <InputName
              onChange={onChangeHandler}
              value={name}
          />
          <br />
          <InputGender
              onChange={onChangeHandler}
              selected={gender}
          />
          <br />
          <br />
          <InputIdentification
              onChange={onChangeHandler}
              value={identification_num}
          />
          <br />
          <br />
          <InputTel
              onChange={onChangeHandler}
              value={tel}
          />
          <br />
          <br />
          <InputEmail
              onChange={onChangeHandler}
              value={email}
          />
          <br />
          <br />
          <InputEtc
              onChange={onChangeHandler}
              value={etc}
          />
          <br />
          <br />
          <SaveBtn save={onSubmitHandler}/>


          <CancelBtn go={'/teacher'}/>
        </div>
      </div>
    </form>
  );
};

export default Teacher_rewrite;
