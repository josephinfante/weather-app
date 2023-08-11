import { useEffect, useRef, useState } from "react";
import { Weather } from "../types/weather.type";
import { WeatherEmpty } from "../models/weather.model";
import { getForecast } from "../services/weather.api";

export const useApp = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState<Weather>(WeatherEmpty);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const getWeather = async (location: string) => {
        setLoading(true);
        const data = await getForecast(location)
        if (!data) {setLoading(false); return;}
        setWeather(data);
        setLoading(false);
    }
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    useEffect(() => {
        const container = containerRef.current;

        const scrollInterval = setInterval(() => {
            if (container) {
                if (container.scrollLeft === 0) {
                    container.scrollTo({
                        top: 0,
                        left: container.scrollWidth,
                        behavior: "smooth",
                    });
                } else {
                    container.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }
        }, 3000);

        return () => {
            clearInterval(scrollInterval);
        };
    }, []);
    return { search, setSearch, weather, loading, containerRef, getWeather }
}