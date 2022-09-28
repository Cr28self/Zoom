import UpdateBtn from "../common/Button/UpdateBtn";
import ShowHideBtn from "../common/Button/ShowHideBtn";
import DeleteBtn from "../common/Button/DeleteBtn";

export const ShowHide = (cell, row, rowIndex, formatExtraData) => {
  return <ShowHideBtn cell={cell} row={row} />;
}; //패스워드 on/off함수

export const click = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      {/* <button
        onClick={() => {
          console.log(cell); //현재 클릭한 셀의 value
          console.log(row); //현재 클릭한 행의 데이터 값들이 저장되어 있음
          console.log(rowIndex); //현재 페이지 테이블에서 몇번째 행인지 ( 0부터 )
          console.log(formatExtraData);
        }}
      >t
        hi
      </button> */}
      <UpdateBtn cell={cell} row={row} />
      {/* 수정버튼 */}

      <DeleteBtn cell={cell} row={row} />
      {/* 삭제버튼 */}
    </div>
  );
}; //버튼 클릭 핸들러

const PASSWORD_TEXT = "비밀번호"+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'

export const LEARNER_SCHEME = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "password",
    text:PASSWORD_TEXT ,
    formatter: ShowHide,
  },
  {
    dataField: "name",
    text: "이름",
    sort: true,
    // filter: textFilter(),
  },
  {
    dataField: "gender",
    text: "성별",
    // filter: textFilter(),
  },
  {
    dataField: "birthday",
    text: "생년월일",
    sort: true,
    // filter: textFilter(),
  },
  {
    dataField: "tel",
    text: "전화번호",
    sort: true,
    // filter: textFilter(),
  },
  {
    dataField: "email",
    text: "이메일",
    sort: true,
    // filter: textFilter(),
  },
  {
    dataField: "etc",
    text: "기타",
    sort: true,
    // filter: textFilter(),
  },

  {
    dataField: "Actions",
    text: "Actions",
    formatter: click,
    align:'center'
    //가운데 정렬
  },
]; //Learner-Columns 설정

export const TEACHER_SCHEME = [
  {
    dataField: "teacher_code",
    text: "강의자 코드",
    sort: true,
  },
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "password",
    text: PASSWORD_TEXT,
    formatter: ShowHide,
  },
  {
    dataField: "name",
    text: "이름",
    sort: true,
  },
  {
    dataField: "gender",
    text: "성별",
  },
  {
    dataField: "identification_num",
    text: "주민번호",
  },
  {
    dataField: "tel",
    text: "전화번호",
    sort: true,
    // filter: textFilter(),
  },
  {
    dataField: "email",
    text: "이메일",
    sort: true,
    // filter: textFilter(),
  },
  {
    dataField: "etc",
    text: "기타",
    sort: true,
    // filter: textFilter(),
  },

  {
    dataField: "Actions",
    text: "Actions",
    formatter: click,
    align:'center'
  },
]; //Teacher-Columns 설정

export const CONTRACT_SCHEME = [
  {
    dataField: "teacher_code",
    text: "강사 코드",
    sort: true,
  },
  {
    dataField: "name",
    text: "성명",
    sort: true,
  },
  {
    dataField: "contract_name",
    text: "계약서명",
    sort: true,
  },
  {
    dataField: "contract_file",
    text: "계약서(파일)",
  },
  {
    dataField: "agree_date",
    text: "계약일자",
    sort: true,
  },
  {
    dataField: "wdate",
    text: "수정일자",
    sort: true,
  },
  {
    dataField: "lecture_time",
    text: "강의시간",
    sort: true,
  },

  {
    dataField: "Actions",
    text: "Actions",
    formatter: click,
    align:'center'
  },
]; //Contract-Columns 스키마 설정
