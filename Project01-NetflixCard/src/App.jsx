// Dafault Import
// import myCard from "./components/NetflixSerise";

// Named Import
// import {NetflixCard, Footer} from "./components/NetflixSerise";

// Mixed Imports
import NetflixCard, {Footer, Header} from "./components/NetflixSerise";

function App() {

  return (
    <>
      <Header />
      <NetflixCard />
      <NetflixCard />
      <NetflixCard />
      <NetflixCard />
      <NetflixCard />
      <Footer />
    </>
  );
    
}

export default App