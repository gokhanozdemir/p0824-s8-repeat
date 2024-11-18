
const initialArray = ["Didem", "Neslinur", "Gökcen", "Şeyda"]

function App() {

  return (
    <div>
      selamlar
      {initialArray.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  )
}

export default App
