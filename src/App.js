import { Browser Router as Router, Route } from "react-router-dom";
import About from "./components/About/About"l
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
