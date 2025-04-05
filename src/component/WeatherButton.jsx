import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCityName }) => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      {cities.map((city, index) => (
        <Button 
          key={index}
          variant="warning"
          onClick={() => setCityName(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton