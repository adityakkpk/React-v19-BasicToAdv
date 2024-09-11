import Posts from "./components/Posts";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([""]);
  const [updateData, setUpdateData] = useState({});

  return (
    <main className="bg-slate-900 w-lvw flex flex-col justify-center items-center gap-5 text-white py-5">
      <Form data={data} setData={setData} updateData={updateData} setUpdateData={setUpdateData} />
      <Posts data={data} setData={setData} updateData={updateData} setUpdateData={setUpdateData} />
    </main>
  );
};

export default App;
