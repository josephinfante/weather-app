import { Search } from "./components/Search"
import { BigImages } from "./helpers/images";
import { formatDate, getDay, getState } from "./helpers/format-date";
import { Icons } from "./helpers/icons";
import { WeatherCard } from "./components/WeatherCard";
import LoadingSpinner from "./components/Loader";
import { useApp } from "./hooks/useApp";

function App() {
  const { search, setSearch, weather, loading, containerRef, getWeather } = useApp();
  return (
    <>
      <section className="h-screen py-5 flex flex-col justify-between">
        <div>
          <form className="w-full flex items-center justify-center" onSubmit={(e) => e.preventDefault()}>
            <Search value={search} onChange={value => setSearch(value)} onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                getWeather(search);
              }
            }}/>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center mb-5 lg:text-left lg:mb-0">
            <div className="flex items-center text-lg mb-4 justify-center lg:justify-start"><span className="mr-3">{Icons('location')}</span><p>{weather.location.name}, {weather.location.country}</p></div>
            <p className="text-5xl font-extrabold">{formatDate(weather.location.localtime)}</p>
            <p className="text-xl font-semibold mt-3">{getDay(weather.location.localtime)}</p>
          </div>
          <div className="w-[200px] lg:w-[300px] h-auto">{BigImages(weather.current.condition.text, getState(weather.location.localtime))}</div>
          <div className="w-full lg:w-auto">
            <div className="flex items-center mt-5 lg:mt-0 justify-center lg:justify-start">
              <div className="h-[50px] w-auto"><img src="./src/assets/thermometer.webp" alt="thermometer" width={"100%"} height={"100%"}/></div>
              <p className="text-4xl font-extrabold ml-3">{weather.current.temp_c}° C</p>
            </div>
            <div className="flex items-center justify-between lg:block">
              <div>
                <p className="my-5 text-sm">Pressure, mb <span className="ml-5 text-md font-semibold">{weather.current.pressure_mb}</span></p>
                <p className="my-5 text-sm">Humidity, % <span className="ml-5 text-md font-semibold">{weather.current.humidity}</span></p>
              </div>
              <div>
                <p className="my-5 text-sm">Cloud, % <span className="ml-5 text-md font-semibold">{weather.current.cloud}</span></p>
                <p className="my-5 text-sm">Wind, kph <span className="ml-5 text-md font-semibold">{weather.current.wind_kph}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div ref={containerRef} className="flex justify-between items-center w-full overflow-x-auto h-[200px]"><WeatherCard Forecast={weather.forecast}/></div>
      </section>
      { loading && <LoadingSpinner />}
    </>
  )
}

export default App
