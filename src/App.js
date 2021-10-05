import  { SignUp, Login, Dashboard} from "./screens";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import image from './images/backgroundImages.png';

function App() {

  return (
    <div className='background-image' style={{ backgroundImage: `url(${image})` }}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
