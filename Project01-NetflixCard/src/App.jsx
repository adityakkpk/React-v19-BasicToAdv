// Dafault Import
// import myCard from "./components/NetflixSerise";

// Named Import
// import {NetflixCard, Footer} from "./components/NetflixSerise";

// Mixed Imports
// import NetflixCard, {Footer, Header} from "./components/NetflixSerise";
import NetflixCard from "./components/NetflixSerise"
import "./components/Netflix.css"

function App() {
  return <section className="container">
    <h1 className="card-heading">Netfilx Series</h1>
    <NetflixCard />
  </section> 
}

export default App