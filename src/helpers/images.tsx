export const BigImages = (type: string, time?: string) => {
    if (type == 'Clear' || type == 'Clear Sky') {
        if (time == 'day') return <img src="./src/assets/big-size-images/sun.webp" alt="Clear Day" width={"100%"} height={"100%"}/>
        else return <img src="./src/assets/big-size-images/moon.webp" alt="Clear Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Partly cloudy' || type == 'Partly sunny' || type == 'Sunny intervals' || type == 'Sunny') {
        if (time == 'day') return <img src="./src/assets/big-size-images/cloudy-day.webp" alt="Partly Cloudy Day" width={"100%"} height={"100%"}/>
        else return <img src="./src/assets/big-size-images/cloudy-night.webp" alt="Partly Cloudy Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Cloudy' || type == 'Overcast') return <img src="./src/assets/big-size-images/cloud.webp" alt="Cloudy" width={"100%"} height={"100%"}/>
    if (type == 'Rain' || type == 'Light rain' || type == 'Moderate rain' || type == 'Heavy rain' || type == 'Showers' || type == 'Patchy rain possible') return <img src="./src/assets/big-size-images/raining.webp" alt="Rain" width={"100%"} height={"100%"}/>
    if (type == 'Thunderstorms' || type == 'Thunderstorm') return <img src="./src/assets/big-size-images/cloud-thunder.webp" alt="Thunder" width={"100%"} height={"100%"}/>
    if (type == 'Thunder and rain') return <img src="./src/assets/big-size-images/thunder-rain.webp" alt="Thunder and rain" width={"100%"} height={"100%"}/>
    if (type == 'Snow' || type == 'Light snow' || type == 'Moderate snow' || type == 'Heavy snow' || type == 'Freezing rain' || type == 'Freezing drizzle') return <img src="./src/assets/big-size-images/snow.webp" alt="Snow" width={"100%"} height={"100%"}/>
    if (type == 'Mist' || type == 'Fog' || type == 'Haze' || type == 'Smoke' || type == 'Dust' || type == 'Sand' || type == 'Ash' || type == 'Squall' || type == 'Tornado') return <img src="./src/assets/big-size-images/fog.webp" alt="Fog" width={"100%"} height={"100%"}/>
    if (type == 'Windy' || type == 'Breezy') return <img src="./src/assets/big-size-images/wind.webp" alt="Windy" width={"100%"} height={"100%"}/>
};

export const SmallImages = (type: string, time?: string) => {
    if (type == 'Clear' || type == 'Clear Sky') {
        if (time == 'day') return <img src="./src/assets/small-size-images/sun.webp" alt="Clear Day" width={"100%"} height={"100%"}/>
        else return <img src="./src/assets/small-size-images/moon.webp" alt="Clear Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Partly cloudy' || type == 'Partly sunny' || type == 'Sunny intervals' || type == 'Sunny') {
        if (time == 'day') return <img src="./src/assets/small-size-images/cloudy-day.webp" alt="Partly Cloudy Day" width={"100%"} height={"100%"}/>
        else return <img src="./src/assets/small-size-images/cloudy-night.webp" alt="Partly Cloudy Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Cloudy' || type == 'Overcast') return <img src="./src/assets/small-size-images/cloud.webp" alt="Cloudy" width={"100%"} height={"100%"}/>
    if (type == 'Rain' || type == 'Light rain' || type == 'Moderate rain' || type == 'Heavy rain' || type == 'Showers' || type == 'Patchy rain possible') return <img src="./src/assets/small-size-images/raining.webp" alt="Rain" width={"100%"} height={"100%"}/>
    if (type == 'Thunderstorms' || type == 'Thunderstorm') return <img src="./src/assets/small-size-images/cloud-thunder.webp" alt="Thunder" width={"100%"} height={"100%"}/>
    if (type == 'Thunder and rain') return <img src="./src/assets/small-size-images/thunder-rain.webp" alt="Thunder and rain" width={"100%"} height={"100%"}/>
    if (type == 'Snow' || type == 'Light snow' || type == 'Moderate snow' || type == 'Heavy snow' || type == 'Freezing rain' || type == 'Freezing drizzle') return <img src="./src/assets/small-size-images/snow.webp" alt="Snow" width={"100%"} height={"100%"}/>
    if (type == 'Mist' || type == 'Fog' || type == 'Haze' || type == 'Smoke' || type == 'Dust' || type == 'Sand' || type == 'Ash' || type == 'Squall' || type == 'Tornado') return <img src="./src/assets/small-size-images/fog.webp" alt="Fog" width={"100%"} height={"100%"}/>
    if (type == 'Windy' || type == 'Breezy') return <img src="./src/assets/small-size-images/wind.webp" alt="Windy" width={"100%"} height={"100%"}/>
};