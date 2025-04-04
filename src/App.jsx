import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자 마자 도시, 섭씨, 화씨, 날씨 정보를 가져온다.
// 2. 도시를 선택하면 해당 도시의 날씨 정보를 가져온다.
// 3. 5개의 버튼이 있다. (현재 위치, 서울, 뉴욕, 도쿄, 파리)
// 4. 도시 버튼 클릭시 도시 별 날씨가 나온다.
// 5. 현재 위치 버튼 클릭시 현재 위치 기반으로 돌아온다.
// 6. api 정보 가져오는 동안 로딩 스피너 표시

function App() {
  const [axis, setAxis] = useState({
    latitude: -1,
    longitude: -1
  });
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [apiKey, setApiKey] = useState('');

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setAxis({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, (error) => {
        console.error('Geolocation Error:', error);
      });
    }
  }

  const getWeatherByCurrentLocation = async () => {
    if (axis.latitude !== -1 && axis.longitude !== -1 && apiKey) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${axis.latitude}&lon=${axis.longitude}&appid=${apiKey}`)
        console.log('Weather response:', response, response.data.weather[0].main);
        let celsiusFloat = response.data.main.temp - 273.15;
        setWeatherInfo({
          city: response.data.name,
          celsius: celsiusFloat.toFixed(2),
          fahrenheit: (celsiusFloat * 9 / 5 + 32).toFixed(2),
          weather: response.data.weather[0].main
        });
      } catch (e) {
        console.error('Weather Error', e);
      }
    }
  }

  useEffect(() => {
    getCurrentLocation();
    setApiKey(import.meta.env.VITE_APP_WEATHER_KEY);
    getWeatherByCurrentLocation();

  }, []); // []: 앱이 실행되자 마자 1번만 실행

  useEffect(() => {
    if (axis.latitude !== -1 && axis.longitude !== -1 && apiKey) {
      getWeatherByCurrentLocation();
    }
  }, [axis, apiKey]);

  useEffect(() => {
    console.log('weatherInfo:', weatherInfo);
  }, [weatherInfo]);

  return (
    <div className='container'>
      <WeatherBox weatherInfo={weatherInfo}/>
      <WeatherButton />
    </div>
  )
}

export default App
