import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import User from './user/Users'
import Signup from './user/signUp'
import SignIn from './auth/signIn'
import Profile from './user/Profile'
import PrivateRoute from './auth/privateRoute'
import EditProfile  from './user/editProfile'
import Menu from './core/Menu'
const MainRouter = () => {
    return ( <div>
         <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={User}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={SignIn}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>
   )
}
export default MainRouter