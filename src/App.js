//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// RRD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Imports
import Navbar from './Components/NavBar';
import Header from './Components/Header';


//Pages
import Home from './Pages/Home';
import Bio from './Pages/Bio';
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'


function App() {
  return (
    <>
    <Header/>
    <Router>
        <Navbar/>
        <main>
        <Switch>
          <Route  exact path="/index" component={Home}/>
          <Route  exact path="/bio" component={Bio}/>
          <Route  exact path="/contact" component={Contact}/>
          <Route  path="*" component={Error404}/>
        </Switch>
        </main>
      </Router>

    </>
  );
}

export default App;
