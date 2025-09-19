import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './Home'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  
  let pName="Samsung S24 Ultra";
  return (

    <div className='container'>
      
        <Card title={pName} description="This is s series of samsung" image="https://tse3.mm.bing.net/th/id/OIP.t5i7y3B3ozp4L5F_trymRQHaId?pid=Api&P=0&h=180" />

         <Card title={pName} description="This is s series of vivo" image="https://tse4.mm.bing.net/th/id/OIP.Pv413ZU7i-oYEtElc8dgNwHaOr?pid=Api&P=0&h=180" />
         <Card />
         <Card />

    </div>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
