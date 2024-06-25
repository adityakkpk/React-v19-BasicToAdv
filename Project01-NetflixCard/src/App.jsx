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

function App() {
  return <section className="container">
    {/* <h1 className="card-heading">Netfilx Series</h1>
    <NetflixCard /> */}
    {/* <EventHandling /> */}
    {/* <EventPropagation /> */}
    {/* <EventProps /> */}
    {/* <State />
    <Sibling /> */}

    {/*React useState challange */}
    {/* <DerrivedState /> */}
    <LiftStateUp />
  </section> 
}

export default App

//-----------Day27-----------------------
// This component will not re-render if the state inside the <State /> component will change.
// function Sibling() {
//   console.log("Sibling Component Render");
//   return <div>Child Component</div>
// }