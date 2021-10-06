import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";
import { WebPlayer } from "./pages/WebPlayer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/faq" exact>
            <Faq />
          </Route>
          <Route path = "/Webplayer/:id" exact>
            <WebPlayer/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
