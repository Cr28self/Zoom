import TableCardBody from "../../../components/Table/TableCardBody";
import TableCard from "../../../components/Table/TableCard";
import TableCardHeader from "../../../components/Table/TableCardHeader";
import {useEffect, useMemo, useState} from "react";
import PageTitle from "../../../components/common/PageTitle";
import * as boardApi from "../../../api/board";

const Learner = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await boardApi.load("learner").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
 /* Learner Data불러오는 함수 정의( get )*/


  useEffect(() => {
    fetchData();



  }, []);

  return (
    <main>
      <div className="container-fluid px-4">
        <PageTitle title={"학습자 관리"} />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <TableCard className="mb-4">
            <TableCardHeader name="학습자" type={"learner"} />
            <TableCardBody type={"learner"} data={data} />
          </TableCard>
        )}
      </div>
    </main>
  );
};

export default Learner;
