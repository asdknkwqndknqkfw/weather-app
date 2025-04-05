import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ 
  cities, 
  setCityName,
  buttonVariant,
  setButtonVariant,
  getCurrentLocation, 
  getWeatherByCurrentLocation 
}) => {

  const handleCurrentLocationButtonClick = () => {
    getCurrentLocation()
    getWeatherByCurrentLocation()
    const updatedVariants = buttonVariant.map((variant, idx) => idx === 0 ? "dark" : "warning");
    setButtonVariant(updatedVariants)
  };

  const handleButtonClick = (index, city="") => {
    const updatedVariants = buttonVariant.map((variant, idx) => idx === index ? "dark" :"warning"); // 모두 클릭x 배열 복사
    setButtonVariant(updatedVariants)
    if (city !== "") {
      setCityName(city)
    }
    console.log(`buttonVariant: ${buttonVariant}`)
  };

  return (
    <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
      <Button 
        variant={buttonVariant[0]} 
        onClick={handleCurrentLocationButtonClick}
        style={{ fontSize: '3vw' }}
      >
          Current Location
      </Button>
      {cities.map((city, index) => (
        <Button 
          key={index}
          variant={buttonVariant[index+1]}
          onClick={() => handleButtonClick(index+1, city)}
          style={{ fontSize: '3vw' }}
        >
          {city}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton