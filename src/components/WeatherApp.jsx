// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
const WeatherApp = () => {
  const [data, setData] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const apiKey = "f93fde0524f77e29af23b95a41a5652d";

  const getApi = (cityName) => {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log("the error is : " + error);
      });
  };
  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
    console.log("value: " + e.target.value);
  };
  const handleSearch = () => {
    getApi(inputCity);
  };

  // useEffect(()=>{
  //   getApi("delhi");
  // },[])

  return (
    <>
      <div className="col-md-12">
        <div className="weatherbg">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-4">
            <input
              type="text"
              value={inputCity}
              className="form-control"
              onChange={handleChangeInput}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        </div>
        { Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center mt-5">
            <div className="shadow rounded weatherResultBox">
              <img className="weatherIcon" src="/img/icon.png" alt="" />

              <h5 className="weatherCity">{data.name}</h5>
              <h6 className="weatherTemp">
                {(data?.main?.temp - 273.15).toFixed(2)}°C
              </h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
