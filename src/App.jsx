import { useState } from 'react'
import './App.css'
import Preview from './Preview';
import Builder from './Builder';
function App() {
  const infoexample = {
    name: 'Sarah Goode',
    email: 'sarahgoode@example.com ',
    phone: '555-555-0000'
  }
  const [info, setinfo] = useState({...infoexample});

  function updateInfo(key, value){
    setinfo({...info, [key]:value});
  }

  return (
    
      <main>
        <Builder updateInfo={updateInfo}/>
        <Preview cv={info}/>
      </main>
    
  )
}

export default App
