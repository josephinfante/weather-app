import { formatDate, getDayShort, getState } from "../helpers/format-date";
import { SmallImages } from "../helpers/images";
import { Forecast } from "../types/weather.type";

type WeatherCardProps = {
    Forecast: Forecast;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({ Forecast }) => {
    return (
        <>
            {
                Forecast.forecastday && Forecast.forecastday.map((day, index) => (
                    <div key={index} className="bg-[#E3F3FA] px-4 py-2 flex flex-col items-center rounded-xl shadow-lg min-w-[120px] ml-3 lg:ml-0">
                        <div className="w-[50px] h-auto">{SmallImages(day.day.condition.text, getState(day.date))}</div>
                        <p className="text-2xl font-bold my-3">{day.day.avgtemp_c}° C</p>
                        <p className="text-md">{formatDate(day.date)}</p>
                        <p className="text-sm font-semibold">{getDayShort(day.date)}</p>
                    </div>
                ))
            }
        </>
    )
};