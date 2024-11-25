import { useState, useEffect } from "react"
import Profiles from "./components/Profiles"
import Login from "./components/Login";
import Register from "./components/Register";
import {
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
function App() {

  return (

    <Switch>
      <Route path="/who-is-watching">
        <Profiles />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/" >
        {/* FIXME: sayfa kenarında üstte bir boşluk kaldı */}
        <LoginPage />
      </Route>
    </Switch>


  )
}

export default App
