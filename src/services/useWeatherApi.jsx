import React, { useEffect, useState } from 'react'
import moment from 'moment/moment';

function useWeatherApi(search) {
    const [weatherData, setWeatherData] = useState();
    const initialState = JSON.parse(localStorage.getItem("history")) || [];
    const [history, setHistory] = useState(initialState);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (search) {
                const now = moment().format('lll');
                await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.country},${search.city}&appid=e19eea5cfe3525c2203532d4dbae99df`)
                    .then((res) => res.json())
                    .then((data) => {

                        if (data.cod == "200") {
                            setWeatherData({
                                main: data.weather[0].main,
                                description: data.weather[0].description,
                                minTemp: data.main.temp_min,
                                maxTemp: data.main.temp_max,
                                humidity: data.main.humidity,
                                time: now.toString()
                            })
                            setHistory([...history, { city: search.city, country: search.country, time: search.time }]);
                            setError(false);
                        }
                        else
                            setError(true);
                    });
            }
        }

        fetchData().catch(setWeatherData());
    }, [search])

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history))
    }, [history])

    return [weatherData, history, setHistory, error];
}

export default useWeatherApi