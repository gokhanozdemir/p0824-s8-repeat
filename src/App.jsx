import { useState, useEffect } from "react"
import Profile from "./components/Profile"
import axios from "axios";
import AddProfile from "./components/AddProfile";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  const sampleUser = {
    "createdAt": "2024-10-17T07:00:18.480Z",
    "name": "Didem Şeyda",
    "avatarUrl": "https://api.multiavatar.com/90023.svg",
    "id": Date.now()
  };


  const handleAddUser = (userData) => {
    console.log('userAdding', userData);
    // yeni array oluşturup
    // !!!!! push asla kullanmıyoruz
    setUsers([...users, userData]);
    // spread ile yeniarr içine kopyalıyoruz.
    // en son sety yeni arrayi setUser ile state'e atıyoruz
  };

  useEffect(() => {
    console.log("componentDidMount")
    axios.get('https://6710ce3ba85f4164ef2f5ff8.mockapi.io/api/profiles')
      .then(function (response) {
        // handle success
        console.log(response);
        setUsers(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }, [])

  return (

    <div>
      <Switch>

        <Route path="/who-is-watching">
          {users.map((item, index) =>
            <Profile key={index} info={item} />)}
          <AddProfile addUser={handleAddUser} demoUser={sampleUser} />
        </Route>

        <Route path="/">
          <div>Hayali Login Formu</div>
          <button className="primary-button">Login</button>
        </Route>

      </Switch>
    </div>
  )
}

export default App
