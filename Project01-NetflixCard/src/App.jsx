// Dafault Import
// import myCard from "./components/NetflixSerise";

// Named Import
// import {NetflixCard, Footer} from "./components/NetflixSerise";

// Mixed Imports
// import NetflixCard, {Footer, Header} from "./components/NetflixSerise";
import NetflixCard from "./components/NetflixSerise"
// import "./components/Netflix.css"
// import "./components/Netflix.module.css"
import { EventHandling } from "./components/EventHandling"
import { EventPropagation } from "./components/Eventpropagation"
import EventProps from "./components/EventProps"


import './components/EV.css'
import { State } from "./components/hooks/State.jsx"
import { DerrivedState } from "./components/DeriveState.jsx"
import LiftStateUp from "./components/LiftStateUp.jsx"
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch.jsx"
import Todo from "./projects/Todo/Todo.jsx"
import Help from "./projects/Todo/Help.jsx"
import ShortCircuit from "./components/ShortCircuit.jsx"
import Counter from "./components/hooks/useState/Index.jsx"
import Challange from "./components/hooks/useState/Challange.jsx"
import Registration from "./components/hooks/useState/Registration.jsx"
import RegisterReact from "./components/hooks/useState/RegisterReact.jsx"
import LoginForm from "./components/hooks/useState/LoginForm.jsx"
import ContactForm from "./components/hooks/useState/ContactForm.jsx"
import ReactUseEffect from "./components/hooks/useEffect/Index.jsx"

function App() {
  return <section className="bg-slate-800 h-full w-[100vw] text-white">
    {/* <h1 className="card-heading">Netfilx Series</h1>
    <NetflixCard /> */}
    {/* <EventHandling /> */}
    {/* <EventPropagation /> */}
    {/* <EventProps /> */}
    {/* <State />
    <Sibling /> */}

    {/*React useState challange */}
    {/* <DerrivedState /> */}
    {/* <LiftStateUp /> */}
    {/* <ToggleSwitch /> */}
    {/* <Help /> */}
    {/* <Todo /> */}
    {/* <ShortCircuit /> */}

    {/* <Counter /> */}

    {/* <Challange />  */}

    {/* <Registration /> */}
    {/* <RegisterReact /> */}
    {/* <LoginForm /> */}
    {/* <ContactForm /> */}

    <ReactUseEffect/>
  </section> 
}

export default App

//-----------Day27-----------------------
// This component will not re-render if the state inside the <State /> component will change.
// function Sibling() {
//   console.log("Sibling Component Render");
//   return <div>Child Component</div>
// }