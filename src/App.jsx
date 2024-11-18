import Profile from "./components/Profile"

const initialArray = ["Didem", "Neslinur", "Gökcen", "Şeyda", "Onur"]

function App() {

  return (
    <div>
      selamlar
      {initialArray.map((item, index) =>
        <Profile key={index} name={item} />)}
    </div>
  )
}

export default App
