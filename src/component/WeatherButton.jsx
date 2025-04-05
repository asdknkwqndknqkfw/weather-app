import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities }) => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      {cities.map((city, index) => (
        <Button variant="warning">{city}</Button>
      ))}
    </div>
  )
}

export default WeatherButton