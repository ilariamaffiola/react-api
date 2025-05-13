import { useState } from 'react'

function App() {

  const [actress, setActress] = useState([]);
  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => setActress(response.data));
  };
  

  return (
    <>
      <div>
        
      </div>
    </>  
  )
}

export default App
