import DarkLight, {
  ThemeProvider,
} from "./components/ContextAPI/DarkLight.jsx";
import Home from "./components/ContextAPI/Home.jsx";
import { MyContextProvider } from "./components/ContextAPI/Index.jsx";
import Services from "./components/ContextAPI/Services.jsx";
import ReactMemo from "./components/hooks/Memo/MemoFunction/Reactmemo.jsx";
import ReducerComp from "./components/hooks/useReducer/Index.jsx";

function App() {
  return (
    <section className="bg-slate-800 w-lvw h-lvh flex justify-center items-center text-white">
      {/* <MyContextProvider>
        <Home />
      <Services />
      </MyContextProvider> */}
      {/* <ThemeProvider>
        <DarkLight />
      </ThemeProvider> */}

      {/* <ReducerComp /> */}

      <ReactMemo />
    </section>
  );
}

export default App;
