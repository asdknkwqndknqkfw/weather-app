import React from 'react'

const Weather = ({weatherInfo, }) => {
  console.log('Weather Info:', weatherInfo);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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

export default Weather