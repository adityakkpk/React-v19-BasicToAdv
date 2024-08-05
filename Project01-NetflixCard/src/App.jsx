import Home from "./components/ContextAPI/Home.jsx";
import { MyContextProvider } from "./components/ContextAPI/Index.jsx";
import Services from "./components/ContextAPI/Services.jsx";

function App() {
  return (
    <section className="bg-slate-800 w-lvw text-white">
      <MyContextProvider>
        <Home />
      <Services />
      </MyContextProvider>
    </section>
  );
}

export default App;
