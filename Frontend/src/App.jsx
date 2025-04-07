import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])
 
  useEffect(() => {
    axios.get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-white'>Jokes {jokes.length}</h1>
     <div>
      {
        jokes.map((joke)=>
      (  <div  key={joke.id}>
  <h3 className='text-start'>{joke?.title}</h3>
        </div>)
        )
      }
     </div>


     
    </>
  )
}

export default App
