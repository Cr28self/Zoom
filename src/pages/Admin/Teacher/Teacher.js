import TableCardBody from "../../../components/Table/TableCardBody";
import TableCard from "../../../components/Table/TableCard";
import TableCardHeader from "../../../components/Table/TableCardHeader";
import { useEffect, useState } from "react";
import PageTitle from "../../../components/common/PageTitle";
import * as boardApi from "../../../api/board";

const Teacher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await boardApi.load("teacher").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }; //API호출 함수 정의

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="container-fluid px-4">
        <PageTitle title={"강의자 관리"} />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <TableCard className="mb-4">
            <TableCardHeader name="강의자" type={"teacher"} />
            <TableCardBody type={"teacher"} data={data} />
          </TableCard>
        )}
      </div>
    </main>
  );
};

export default Teacher;
