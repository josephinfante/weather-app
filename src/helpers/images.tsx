import Sun from '../assets/big-size-images/sun.webp';
import Moon from '../assets/big-size-images/moon.webp';
import CloudyDay from '../assets/big-size-images/cloudy-day.webp';
import CloudyNight from '../assets/big-size-images/cloudy-night.webp';
import Cloud from '../assets/big-size-images/cloud.webp';
import Raining from '../assets/big-size-images/raining.webp';
import CloudThunder from '../assets/big-size-images/cloud-thunder.webp';
import ThunderRain from '../assets/big-size-images/thunder-rain.webp';
import Snow from '../assets/big-size-images/snow.webp';
import Fog from '../assets/big-size-images/fog.webp';
import Wind from '../assets/big-size-images/wind.webp';
import SunSmall from '../assets/small-size-images/sun.webp';
import MoonSmall from '../assets/small-size-images/moon.webp';
import CloudyDaySmall from '../assets/small-size-images/cloudy-day.webp';
import CloudyNightSmall from '../assets/small-size-images/cloudy-night.webp';
import CloudSmall from '../assets/small-size-images/cloud.webp';
import RainingSmall from '../assets/small-size-images/raining.webp';
import CloudThunderSmall from '../assets/small-size-images/cloud-thunder.webp';
import ThunderRainSmall from '../assets/small-size-images/thunder-rain.webp';
import SnowSmall from '../assets/small-size-images/snow.webp';
import FogSmall from '../assets/small-size-images/fog.webp';
import WindSmall from '../assets/small-size-images/wind.webp';


export const BigImages = (type: string, time?: string) => {
    if (type == 'Clear' || type == 'Clear Sky') {
        if (time == 'day') return <img src={Sun} alt="Clear Day" width={"100%"} height={"100%"}/>
        else return <img src={Moon} alt="Clear Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Partly cloudy' || type == 'Partly sunny' || type == 'Sunny intervals' || type == 'Sunny') {
        if (time == 'day') return <img src={CloudyDay} alt="Partly Cloudy Day" width={"100%"} height={"100%"}/>
        else return <img src={CloudyNight} alt="Partly Cloudy Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Cloudy' || type == 'Overcast') return <img src={Cloud} alt="Cloudy" width={"100%"} height={"100%"}/>
    if (type == 'Rain' || type == 'Light rain' || type == 'Moderate rain' || type == 'Heavy rain' || type == 'Showers' || type == 'Patchy rain possible') return <img src={Raining} alt="Rain" width={"100%"} height={"100%"}/>
    if (type == 'Thunderstorms' || type == 'Thunderstorm') return <img src={CloudThunder} alt="Thunder" width={"100%"} height={"100%"}/>
    if (type == 'Thunder and rain') return <img src={ThunderRain} alt="Thunder and rain" width={"100%"} height={"100%"}/>
    if (type == 'Snow' || type == 'Light snow' || type == 'Moderate snow' || type == 'Heavy snow' || type == 'Freezing rain' || type == 'Freezing drizzle') return <img src={Snow} alt="Snow" width={"100%"} height={"100%"}/>
    if (type == 'Mist' || type == 'Fog' || type == 'Haze' || type == 'Smoke' || type == 'Dust' || type == 'Sand' || type == 'Ash' || type == 'Squall' || type == 'Tornado') return <img src={Fog} alt="Fog" width={"100%"} height={"100%"}/>
    if (type == 'Windy' || type == 'Breezy') return <img src={Wind} alt="Windy" width={"100%"} height={"100%"}/>
};

export const SmallImages = (type: string, time?: string) => {
    if (type == 'Clear' || type == 'Clear Sky') {
        if (time == 'day') return <img src={SunSmall} alt="Clear Day" width={"100%"} height={"100%"}/>
        else return <img src={MoonSmall} alt="Clear Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Partly cloudy' || type == 'Partly sunny' || type == 'Sunny intervals' || type == 'Sunny') {
        if (time == 'day') return <img src={CloudyDaySmall} alt="Partly Cloudy Day" width={"100%"} height={"100%"}/>
        else return <img src={CloudyNightSmall} alt="Partly Cloudy Night" width={"100%"} height={"100%"}/>
    }
    if (type == 'Cloudy' || type == 'Overcast') return <img src={CloudSmall} alt="Cloudy" width={"100%"} height={"100%"}/>
    if (type == 'Rain' || type == 'Light rain' || type == 'Moderate rain' || type == 'Heavy rain' || type == 'Showers' || type == 'Patchy rain possible') return <img src={RainingSmall} alt="Rain" width={"100%"} height={"100%"}/>
    if (type == 'Thunderstorms' || type == 'Thunderstorm') return <img src={CloudThunderSmall} alt="Thunder" width={"100%"} height={"100%"}/>
    if (type == 'Thunder and rain') return <img src={ThunderRainSmall} alt="Thunder and rain" width={"100%"} height={"100%"}/>
    if (type == 'Snow' || type == 'Light snow' || type == 'Moderate snow' || type == 'Heavy snow' || type == 'Freezing rain' || type == 'Freezing drizzle') return <img src={SnowSmall} alt="Snow" width={"100%"} height={"100%"}/>
    if (type == 'Mist' || type == 'Fog' || type == 'Haze' || type == 'Smoke' || type == 'Dust' || type == 'Sand' || type == 'Ash' || type == 'Squall' || type == 'Tornado') return <img src={FogSmall} alt="Fog" width={"100%"} height={"100%"}/>
    if (type == 'Windy' || type == 'Breezy') return <img src={WindSmall} alt="Windy" width={"100%"} height={"100%"}/>
};