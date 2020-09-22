import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage'
import SignIn from './pages/SignIn/SignIn'
import './default.scss';
import { useDispatch } from 'react-redux'
import Explorer from './pages/Explorer/Explorer';
import { Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions'

//hoc
// import WithAuth from './hoc/'


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }
      dispatch(setCurrentUser(userAuth))
    })
    return () => {
      authListener();

    }

  }, [])

  return (
    <div className="App" >
      <Navbar></Navbar>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/explore" component={Explorer}></Route>
      <Route path="/signin"
        render={() => (<SignIn></SignIn>)}>
      </Route>
      <Route path="/signup"
        render={() => (<SignUp></SignUp>)}>
      </Route>
    </div >
  );
}


export default App;
