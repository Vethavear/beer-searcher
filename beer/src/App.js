import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage'
import SignIn from './pages/SignIn/SignIn'
import './default.scss';
import Explorer from './pages/Explorer/Explorer';
import { Route, Redirect } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp';
import { auth, handleUserProfile } from './firebase/utils';

const initalState = {
  currentUser: null
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initalState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({
        ...initalState
      })
    })
  }

  componentWillUnmount() {
    this.authListener();

  }
  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <Navbar currentUser={currentUser}></Navbar>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/explore" component={Explorer}></Route>
        <Route path="/signin"
          render={() => currentUser ? <Redirect to="/" /> : (<SignIn></SignIn>)}>
        </Route>
        <Route path="/signup"
          render={() => currentUser ? <Redirect to="/" /> : (<SignUp></SignUp>)}>
        </Route>
      </div >
    );
  }

}

export default App;
