import axios from "axios"
import {useState} from "react"


export const WeatherPage = () => {

    const [data,setData] = useState({})
    const [backgroundData, setBackgroundData] = useState({})
    const [location, setLocation] = useState('')

    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=1&appid=8883092dd8393d0eef92fbf43880aabd`
    const backgroundUrl=`https://api.unsplash.com/search/photos?per_page=1&orientation=landscape&query=${location}&client_id=iiXov6k8HnqIdxiXjGfnz7oNDzOlTSAdoYa-GHWTzXU`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            axios.get(backgroundUrl).then((response) => {
                setBackgroundData(response.data.results[0].urls.full)
                console.log(location)
                console.log(backgroundUrl)
                console.log("BG data:",response)
                
            })
            })
        setLocation('');
        }
    }


    return (
        <div className="app" 
            style={{backgroundImage:`url(${backgroundData})`}}>
            <div className="search">
                <input 
                type="text"
                value={location} 
                onChange= {event => setLocation(event.target.value)}
                placeholder="Enter location"
                onKeyPress={searchLocation}
                /> 
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        {data.city ? <p> {data.city.name} </p> : null}
                    </div>
                    <div className="temperature">
                        {data.list ? <h1>{data.list[0].main.temp.toFixed()}°C</h1>: null}
                        {data.list ? <h3> Temp Min: {data.list[0].main.temp_min.toFixed()}°C</h3>: null} 
                        {data.list ? <h3> Temp Max: {data.list[0].main.temp_max.toFixed()}°C</h3>: null}
                    </div>
                    <div className="description">
                    {data.weather ? <p> {data.list[0].weather[0].description}</p>: null}
                    </div>
                </div>
            </div>
            
                    <div className="bottom">
                    <div className="feels">
                        {data.list ? <p className="bold"> {data.list[0].main.feels_like.toFixed()}°C</p>: null}
                        <p>Feels like</p>
                    </div>
                    <div className="humidity">
                        {data.list ? <p className="bold">{data.list[0].main.humidity}%</p>: null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.list? <p className="bold">{data.list[0].wind.speed.toFixed()} MPH </p>: null}
                        <p>Wind speed</p>
                    </div>
                </div>
                
            </div>
        
    )
}