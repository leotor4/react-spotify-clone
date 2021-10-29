import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Faq } from "./pages/Faq";
import { Formulario } from "./pages/Form";
import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { WebPlayer } from "./pages/WebPlayer";
import {Login} from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route path="/" exact>
            {/*<Splash />*/}
            <Login />
          </Route>
          <Route path="/home" exact>
          <Home />
          </Route>
          <Route path="/faq" exact>
            <Faq />
          </Route>
          <Route path = "/Webplayer/:id" exact>
            <WebPlayer/>
          </Route>
          <Route path = "/inscricao" exact>
            <Formulario/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
