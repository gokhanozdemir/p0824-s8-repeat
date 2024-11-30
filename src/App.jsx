import { useState, useEffect } from "react"
import Profiles from "./components/Profiles"
import Login from "./components/Login";
import Register from "./components/Register";
import {
  Switch,
  Route,
  Link, NavLink, useParams
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function UserProfile() {
  let { userId } = useParams();
  return <div>Now showing post {userId}</div>;
}

function App() {

  return (

    <Switch>
      <Route path="/who-is-watching">
        <Profiles />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/user/:userId">
        <UserProfile />
      </Route>

      <Route>
        {/* FIXME: sayfa kenarında üstte bir boşluk kaldı */}
        <LoginPage />
      </Route>
    </Switch>


  )
}

export default App
