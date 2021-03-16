import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import NavBar from "./components/Nav/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
