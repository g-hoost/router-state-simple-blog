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
import Header from './Components/Header';

export default function App()
{
  return (

    <Router>
      <div>
        <h1>My Life</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/blog">
            <About />
          </Route>
          <Route path="/contact">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="App">
        <Header />
        <Blogcard data={Blogdata}></Blogcard>
      </div>

    </Router>
  );
}


function Home()
{
  return <h2>Home</h2>;
}

function About()
{
  return <h2>About</h2>;
}

function Users()
{
  return <h2>Users</h2>;
}
