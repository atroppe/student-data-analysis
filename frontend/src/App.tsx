import React, { useEffect, useState } from "react";
import api from "./api";
import DataTable from "./components/DataTable/DataTable";

// interface Data {
//   id: number;
//   name: string;
// }

const App: React.FC = () => {
  // const [data, setData] = useState<Data[] | null>(null);

  // useEffect(() => {
  //   api
  //     .get<Data[]>("/csv/process")
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div>
      {/* <h1>Data from Backend:</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre> */}
      <h1>Student Data</h1>
      <DataTable />
    </div>
  );
};

export default App;
