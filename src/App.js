import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
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
      <div className="App">
        <Router>
          <div className="App">
           
            <ul>
              {!this.state.isLogginIn && (<li><Link to="/login">Login</Link></li>)}
            </ul>
            <div>
              {!this.state.isLogginIn && (<Route exact path="/login" component={LoginView} />)}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;