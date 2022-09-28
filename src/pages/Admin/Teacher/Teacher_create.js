import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as boardApi from "../../../api/board";
import InputTeacherCode from "../../../components/common/Input/InputTeacherCode";
import InputID from "../../../components/common/Input/InputID";
import DuplicateBtn from "../../../components/common/Button/DuplicateBtn";
import InputPassword from "../../../components/common/Input/InputPassword";
import InputName from "../../../components/common/Input/InputName";
import InputGender from "../../../components/common/Input/InputGender";
import InputIdentification from "../../../components/common/Input/InputIdentification";
import InputEmail from "../../../components/common/Input/InputEmail";
import InputTel from "../../../components/common/Input/InputTel";
import InputEtc from "../../../components/common/Input/InputEtc";
import SaveBtn from "../../../components/common/Button/SaveBtn";
import CancelBtn from "../../../components/common/Button/CancelBtn";

export default function Teacher_create() {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    teacher_code:'',
    id:'',
    password:'',
    name:'',
    gender:'',
    identification_num:'',
    tel:'',
    email:'',
    etc:''
  });
  const { teacher_code,id,password,name,gender,identification_num,tel,email,etc } = inputs;
  const onChangeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });

  };

  const [isDuplicatedId, setIsDuplicatedId] = useState(true);

  const onSubmitHandler = async (e) => {
    e.preventDefault();


    try {
      if (!isDuplicatedId) {
        //중복체크 O

        const response = await boardApi.create("teacher", inputs);

        console.log(response);
        alert("생성이 완료되었습니다.");
        history("/teacher");
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
          setIsDuplicatedId(res);
        });
  };
  /*중복 체크 여부 확인 함수*/

  return (
      <form>
        <div className="container-fluid px-4">
          <h1 className="mt-4">강의자 추가</h1><br />

          <div className="card-body">
            <InputTeacherCode
                mode={"create"}
                value={teacher_code}
                onChange={onChangeHandler}
            />
            <br />
            <InputID
                mode={"create"}
                onChange={onChangeHandler}
                value={id}
            />
            <DuplicateBtn check={onCheckDuplicateId} />
            <br /><br />

            <InputPassword
                onChange={onChangeHandler}
                value={password}
            />
            <br /><br />
            <InputName
                onChange={onChangeHandler}
                value={name}
            />
            <br />

            <InputGender
                onChange={onChangeHandler}
                selected={gender}
            />
            <br /><br />
            <InputIdentification
                onChange={onChangeHandler}
                value={identification_num}
            />
            <br />
            <InputTel
                onChange={onChangeHandler}
                value={tel}
            />
            <br /><br />
            <InputEmail
                onChange={onChangeHandler}
                value={email}
            />

            <br /><br />
            <InputEtc
                onChange={onChangeHandler}
                value={etc}
            />
            <br /><br />

            <SaveBtn save={onSubmitHandler}/>
            <CancelBtn go={'/teacher'} />
          </div>
        </div>
      </form>
  );
}
