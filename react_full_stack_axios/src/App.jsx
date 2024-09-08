import Posts from "./components/Posts";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([""]);

  return (
    <main className="bg-slate-900 w-lvw flex flex-col justify-center items-center gap-5 text-white py-5">
      <Form data={data} setData={setData} />
      <Posts data={data} setData={setData} />
    </main>
  );
};

export default App;
