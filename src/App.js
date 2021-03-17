import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path ="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
