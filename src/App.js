import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Drawer from "./components/Drawer";
const LoginView = () => (
  
  <Login />
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginIn: false
    }
  }

  componentWillMount() {
    this.setState({
      isLogginIn: localStorage.getItem("isLogginIn")
    })
  }

  render() {

    return (
      <Router exact path="/">
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/Login">
              {!this.state.isLogginIn && (<Route exact path="/login" component={LoginView} />)}
            </Route>
            <Route exact path="/Drawer">
              {this.state.isLogginIn && (<Drawer />)}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;