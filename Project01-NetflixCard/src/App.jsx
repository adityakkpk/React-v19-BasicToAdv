// Dafault Import
// import myCard from "./components/NetflixSerise";

// Named Import
// import {NetflixCard, Footer} from "./components/NetflixSerise";

// Mixed Imports
// import NetflixCard, {Footer, Header} from "./components/NetflixSerise";
import NetflixCard from "./components/NetflixSerise"
// import "./components/Netflix.css"
import "./components/Netflix.module.css"
import { EventHandling } from "./components/EventHandling"
import { EventPropagation } from "./components/Eventpropagation"
import EventProps from "./components/EventProps"

function App() {
  return <section className="container">
    {/* <h1 className="card-heading">Netfilx Series</h1>
    <NetflixCard /> */}
    {/* <EventHandling /> */}
    {/* <EventPropagation /> */}
    <EventProps />
  </section> 
}

export default App