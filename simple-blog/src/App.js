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

function App()
{
  return (
    <Router>
      <div className="App">
        <Header />
        <Blogcard data={Blogdata}></Blogcard>
      </div>

    </Router>


  );
}

export default App;
