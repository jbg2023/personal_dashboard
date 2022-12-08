import React from 'react'
import Button from '../Ui/Button'
import Card from '../Ui/Card'
import './ForecastModal.module.css'
const ForecastModal = (props) => {
  return (
    <Card className='modal' >
        <header className='header'> Five Day Forecast</header>
<span>{props.day}:   </span>
<span>  conditions:{props.text}  </span>
<span> High:{props.high} </span>
<span>Low:{props.low}</span>
<footer>

</footer>

    
    </Card>
  )
}

export default ForecastModal