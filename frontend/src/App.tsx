import React, { useEffect, useState } from "react";
import { fetchData } from "./services/api";

const App: React.FC = () => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    fetchData().then((response) => {
      setData(response.data);
    });
  }, []);

  return <div>{data}</div>;
};

export default App;
