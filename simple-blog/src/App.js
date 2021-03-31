import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blogdata from "./Blogdata";
import Blogcard from "./Components/Blogcard";

export default function App()
{
  return (

    <Router>
      <div className="App">
        <Link />
        <Blogcard data={Blogdata}></Blogcard>

        <Switch>

          <Route path="/"></Route>
          <Route path="/blog"></Route>
          <Route path="/contact"></Route>

        </Switch>
      </div>
    </Router>
  );
}


