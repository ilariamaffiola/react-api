import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {

  const [actress, setActress] = useState([]);
  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => {
      console.log(response.data);
    });
  };
  useEffect(() => {
    fetchActress();
  }, [])
  

  return (
    <>
      <div>
      </div>
    </>  
  )
}

export default App
