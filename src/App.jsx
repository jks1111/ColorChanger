import { useState } from 'react'
import './App.css'

function App() {
  const [colorChanger, setColorChanger] = useState("olive")
  const [data,setData] = useState(0)
function getChange(){
  //let input = document.querySelector('#colorName').input
  //  setColorChanger(val.target.value)
   //console.log(input)
  // console.log(val.target.value)
  setColorChanger(data)
}
function getData(val){
   setData(val.target.value)
}
  return (
   <>
      <div className='mainContainer' style={{backgroundColor:colorChanger}}>  </div>
    
      <div className="btn-container">
        <input type='text' placeholder='Enter name of color' id='colorName' onChange={getData}/> 
        <br/> <br/><button onClick={getChange}>Change</button>
      </div>
   </>
  )
}

export default App
