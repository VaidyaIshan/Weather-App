'use client';
import Navbar from '../components/navbar.js';
import {useState} from 'react';
interface Weatherdata{
    temperature:string;
    min_temperature:string;
    max_temperature:string;
    pressure:string;
    humidity:string;
    wind:string;
}
export default function Display(){
    const [city,setcity]=useState("");
    const [fetcheddata,setFetcheddata]=useState<Weatherdata | null> (null);

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;


        const fetchweather=async()=>{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error("City not found");
        const forecast=await response.json();
        
        

        const finaldata:Weatherdata={
            temperature:`${forecast.main.temp}`,
            min_temperature:`${forecast.main.temp_min}`,
            max_temperature:`${forecast.main.temp_max}`,
            pressure:`${forecast.main.pressure}`,
            wind:`${forecast.wind.speed}`,
            humidity:`${forecast.main.humidity}`,
        };
        setFetcheddata(finaldata); 
    };
    return(
        <>
        <Navbar></Navbar>
        <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-4">

  <div className="w-full max-w-2xl h-[500px] flex flex-col items-center justify-center space-y-6">

    <h1 className="text-4xl font-bold">City Weather</h1>

    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        className="w-72 h-10 px-4 text-xl text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={fetchweather}
        className="w-48 h-10 bg-green-500 text-white text-xl rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Submit
      </button>
    </div>
    <div className="text-center space-y-4">
      <p className="text-3xl font-bold" >Temperature: {fetcheddata?.temperature} C</p>
      <p className="text-3xl font-bold" >Min. Temperature: {fetcheddata?.min_temperature} C</p>
      <p className="text-3xl font-bold" >Max.Temperature: {fetcheddata?.max_temperature} C</p>
      <p className="text-3xl font-bold" >Humidity: {fetcheddata?.humidity} %</p>
      <p className="text-3xl font-bold" >Pressure: {fetcheddata?.pressure} hPa</p>
      <p className="text-3xl font-bold" >Wind Speed: {fetcheddata?.wind} m/s</p>
    </div>
  </div>
</div>
        </>
    );

};