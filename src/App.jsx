import { useState, useEffect } from "react"
import Profile from "./components/Profile"
import axios from "axios";
import AddProfile from "./components/AddProfile";


function App() {
  const [users, setUsers] = useState([]);

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
      selamlar
      {users.map((item, index) =>
        <Profile key={index} info={item} />)}
      <AddProfile />
    </div>
  )
}

export default App
