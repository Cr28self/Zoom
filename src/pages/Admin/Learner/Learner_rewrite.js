import { useNavigate, useParams, useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import useInput from "../../../hooks/useInput";
import { useEffect, useRef, useState } from "react";
import InputID from "../../../components/common/Input/InputID";
import InputPassword from "../../../components/common/Input/InputPassword";
import InputName from "../../../components/common/Input/InputName";
import InputBirthday from "../../../components/common/Input/InputBirthday";
import InputEmail from "../../../components/common/Input/InputEmail";
import InputTel from "../../../components/common/Input/InputTel";
import InputEtc from "../../../components/common/Input/InputEtc";
import SaveBtn from "../../../components/common/Button/SaveBtn";
import CancelBtn from "../../../components/common/Button/CancelBtn";
import InputGender from "../../../components/common/Input/InputGender";

import * as boardApi from "../../../api/board";

const Learner_rewrite = () => {
  const { id } = useParams();
  const history = useNavigate();




  const [inputs, setInputs] = useState({
    id:id,
    password:'',
    lname:'',
    gender:'',
    birthday:'',
    tel:'',
    email:'',
    etc:''
  });

  const { password,name,gender,birthday,tel,email,etc } = inputs;


  //refactor
  const fetchData = async () => {
    try {
      const { data } = await boardApi.loadUserInfo('learner',id);
      console.log(data)
      return data[0];
    } catch (e) {}
  }; //API호출 함수 정의





  useEffect(() => {
    fetchData().then((result) => {

      setInputs({
        ...inputs,
        password:result.password,
        name:result.name,
        gender:result.gender,
        birthday:result.birthday,
        tel:result.tel,
        email:result.email,
        etc:result.etc
      });

    });
  }, []);



  const onChangeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log(inputs)

  };



  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await boardApi
          .editUser('learner',id,inputs);

      console.log(response);
      alert("수정되었습니다.");
      history("/learner");
    } catch (e) {
      console.log("Error >>" + e);
    }
  };






  return (
    <form >
      <div className="container-fluid px-4">
        <h1 className="mt-4">학습자 수정</h1>

        <div className="card-body">
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
          <InputBirthday
              onChange={onChangeHandler}
              value={birthday}
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
            <CancelBtn go={"/learner"} />


        </div>
      </div>
    </form>
  );
};

export default Learner_rewrite;
