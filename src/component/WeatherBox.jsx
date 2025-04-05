import React from 'react'

const WeatherBox = ({weatherInfo, }) => {
  // console.log('Weather Info:', weatherInfo);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='weather-box'>
      <div>
        <h3 style={{ color: 'black' }}>
          {weatherInfo?.city}
        </h3>
      </div>
      <div>
        <h1 style={{ color: 'green' }}>
          {weatherInfo?.celsius} °C / {weatherInfo?.fahrenheit} °F
        </h1>
      </div>
      <div>
        <h2 style={{ color: 'skyblue' }}>
          {weatherInfo?.weather}
        </h2>
      </div>
    </div>
  )
}

export default WeatherBox