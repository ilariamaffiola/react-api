import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {

  const [actress, setActress] = useState([]);
  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => {setActress(response.data)});
  };
  useEffect(() => {
    fetchActress();
  }, [])
  

  return (
    <>
      <div>
        <div className="container-fluid">
          <h1 className='text-center p-3 text-danger'>CAST FETCHING</h1>
          <div className="row g-4">
                {actress.map((item) => (
                  <div className="col-3">
                  <div className="card" key={item.id}>
                    <div className="card-img">
                      <img src={item.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className='card-text'>{item.birth_year}</p>
                      <p className='card-text'>{item.nationality}</p>
                      <p className="card-text">{item.biography}</p>
                    </div>
                  </div>
                  </div>
                ))}
              
          </div>
        </div>
      </div>
    </>  
  )
}

export default App
