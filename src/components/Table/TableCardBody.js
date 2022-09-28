import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import {
  LEARNER_SCHEME,
  TEACHER_SCHEME,
  CONTRACT_SCHEME,
} from "./TableCardBodyOptions";
import './TableCardBody.css'

const TableCardBody = (props) => {
  const columns = () => {
    if (props.type === "learner") {
      return LEARNER_SCHEME;
    } else if (props.type === "teacher") {
      return TEACHER_SCHEME;
    } else if (props.type === "contract") {
      return CONTRACT_SCHEME;
    } else {
      console.log("err");
    }
  };

  const { SearchBar, ClearSearchButton } = Search;

  const options = {
    page: 0,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: props.data.length,
      },
    ],
    sizePerPage: 5,
    pageStartIndex: 0,
    paginationSize: 3,
    prePage: "Prev",
    nextPage: "Next",
    firstPage: "First",
    lastPage: "Last",
  }; //테이블 페이지이동 옵션

  return (
    <div className="card-body">
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.data}
        columns={columns()}

        search
      >
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            {/* 서치 바 */}
            <ClearSearchButton {...props.searchProps} />
            {/* 검색어 클리어 버튼 */}
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory(options)}
              wrapperClasses="table-responsive"
              hover
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default TableCardBody;
