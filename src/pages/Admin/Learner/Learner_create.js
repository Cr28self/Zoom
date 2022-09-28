import {  useState } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import DuplicateBtn from "../../../components/common/Button/DuplicateBtn";
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
export default function Learner_create() {
  const history = useNavigate();


  const [inputs, setInputs] = useState({
    id:'',
    password:'',
    name:'',
    gender:'',
    birthday:'',
    tel:'',
    email:'',
    etc:''
  });

  const { id,password,name,gender,birthday,tel,email,etc } = inputs;

  const onChangeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });

  };
  /*Input 입력값 갱신 함수 ( name : value 기준 )*/


  const [isDuplicated, setIsDuplicated] = useState(true);
  /*중복 체크 여부 확인 state*/

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(inputs);
      if (!isDuplicated) {
        //중복체크 O
        const response = await boardApi.create("learner", inputs);
        console.log(response);
        alert("생성이 완료되었습니다.");
        history("/learner");
      } else {
        //중복체크 X
        alert("아이디 중복체크 해주세요");
      }
    } catch (e) {
      console.log(e);
    }
  };
  /*submit함수*/


  const onCheckDuplicateId = () => {
      boardApi.duplicateId("learner",id,
          ()=>{
            setInputs({
              ...inputs, // 기존의 input 객체를 복사한 뒤
              id: '' // name 키를 가진 값을 value 로 설정
            })

          }
      )
          .then((res) => {
        setIsDuplicated(res);
      });
  };
  /*중복 체크 여부 확인 함수*/
  return (
    <form>
      <div className="container-fluid px-4">
        <h1 className="mt-4">학습자 추가</h1>
        <br />

        <div className="card-body">
          <InputID
            mode={"create"}
            onChange={onChangeHandler}
            value={id}
          />
          <DuplicateBtn check={onCheckDuplicateId} />
          <br />
          <br />

          <InputPassword
              onChange={onChangeHandler}
              value={password}
          />
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
}
