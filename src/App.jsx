import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/style.css'

import Header from './component/Header'
import Search from './component/Search'
import History from './component/History'
import useWeatherApi from './services/useWeatherApi'
import WeatherCard from './component/WeatherCard'

function App() {
  const [search, setSearch] = useState();
  const [weatherData, history, setHistory, error] = useWeatherApi(search);

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      <WeatherCard weatherData={weatherData} search={search} error={error} />
      <History history={history} setHistory={setHistory} setSearch={setSearch} />
    </div>
  )
}

export default App
