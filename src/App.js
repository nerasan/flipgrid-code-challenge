// import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// components
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";

const App = () => {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/confirmation" component={Confirmation}/>
    </Switch>
  );
}

export default App;
