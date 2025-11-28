import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function Weather(){
    const [weather, setWeather] = useState({});

    const fetchWeather = () =>{
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a46b4f22404c227652cdfb8b064d3f96')
        .then((response)=>
            setWeather(response.data)
    )
        .catch(error => {
            console.error("There was an error fetching the weather!", error);
        });
    }

    useEffect(fetchWeather,[])

    return (
        <div>
            <h3>Weather Forecast</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th></th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Humidity</th>
                        <th>Temperature</th>
                        <th>Feels Like</th>
                        <th>Visibility</th>
                        <th>Wind</th>
                    </tr>
                </thead>
                <tbody>
                        <tr key={weather.id}>
                            <td>
                                <img src={"https://openweathermap.org/img/wn/10d@2x.png"}/>
                            </td>
                            <td>{weather.name}</td>
                            <td>{weather.sys.country}</td>
                            <td>{weather.main.humidity}</td>
                            <td>{weather.main.temp}</td>
                            <td>{weather.main.feels_like}</td> 
                            <td>{weather.visibility}</td>
                            <td>{weather.wind.speed}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
