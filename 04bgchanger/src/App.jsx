import {useState} from "react"


function App() {
  const [color, setcolor] = useState("black")

  return (
    <div className="w-full h-full duration-200 "
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          
        </div>

    </div>
  )
}

export default App
