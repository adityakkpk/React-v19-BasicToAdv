import React, { useEffect, useState } from "react";
import { getUserDetails } from "../API/api";

const FetchOld = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await getUserDetails("adityakkpk");
    setData(response);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="text-center my-5 text-xl font-bold">FetchOld</div>
      <div className="flex justify-center my-10 text-xl">{data?.name}</div>
    </main>
  );
};

export default FetchOld;
