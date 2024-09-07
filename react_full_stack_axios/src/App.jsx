import Posts from "./components/Posts";
import Form from "./components/Form";

const App = () => {
  return (
    <main className="bg-slate-900 w-lvw flex flex-col justify-center items-center gap-5 text-white py-5">
      <Form />
      <Posts />
    </main>
  );
};

export default App;
