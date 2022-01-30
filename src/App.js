import React from "react";
import { useState , useEffect}from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";

function App() {

  // Function for weather
  const apiKey = "fda213bdafce08c18143c122b697430e";
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  
  const getWeatherDetails = (city) =>{
    if(!city) return
    
    const apiURL =  "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response",res.data)
      setData(res.data)

    }).catch((err) => {
      console.log("err", err)
    })
  }

  
  const handleChangeInput=(e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const searchData = () =>
  {
    getWeatherDetails(inputCity)
  }
  useEffect(() => {
    getWeatherDetails("Bangalore")
  },[])


  return (
   <div className="col-md-12">
     

     <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherSearchBox">
          {/* weather icoon */}
          <img src="https://cdn-icons-png.flaticon.com/512/3075/3075858.png" alt="weather Icons" className="icon"/>
          <h5 className="city">{data?.name}</h5>
          <h6 className="temp">{((data?.main?.temp)-273.15).toFixed(2)}<span>&#176;</span>C</h6>
        </div>
     </div>
     <div className="bg-weather">
        <h1 className="heading">Today's Weather</h1>
        <input type="text" className="txtSearch" value={inputCity} onChange={handleChangeInput}/>
        <button className="btn btn-primary" type="button" onClick={searchData}>Submit</button>
     </div>
   </div>

  );
}
export default App;
