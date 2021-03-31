import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blogdata from './Components/Blogdata';
import Header from './Components/Header';

function App()
{
  return (
    <div className="App">
      <Header />
      <Blogdata data={Blogcard}></Blogdata>
    </div>
  );
}

export default App;
