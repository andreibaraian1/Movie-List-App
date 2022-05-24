import "./App.css";
import { Navbar } from "./components/Navbar";
import RoutesBuilder from "./components/RoutesBuilder";
import { BrowserRouter as Router } from "react-router-dom";
import { ProviderBuilder } from "./components/Provider/ProviderBuilder";

function App() {
  document.body.style.backgroundColor = "#121212";

  return (
    <>
      <ProviderBuilder>
        <Router>
          <>
            <Navbar />
            <RoutesBuilder />
          </>
        </Router>
      </ProviderBuilder>
    </>
  );
}

export default App;
