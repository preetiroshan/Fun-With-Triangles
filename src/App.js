import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Area from "./pages/Area";
import HomePage from "./pages/HomePage";
import Hypotenuse from "./pages/Hypotenuse";
import IsTriangle from "./pages/isTriangle";
import Quiz from "./pages/Quiz";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/isTriangle" component={IsTriangle} />
          <Route path="/hypotenuse" component={Hypotenuse} />
          <Route path="/area" component={Area} />
        </Switch>
      </Router>
    </div>
  );
}
