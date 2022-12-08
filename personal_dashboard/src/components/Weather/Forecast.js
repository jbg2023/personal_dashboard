import Modal from '../Ui/Modal'
import Button from '../Ui/Button'
import Card from '../Ui/Card'
import './ForecastModal.module.css'


const Forecast = (props) => {

  return (
    <Modal>
    <Card className='modal' >
        <header className='header'> Five Day Forecast</header>
<span>{props.day}:   </span>
<span>  conditions:{props.text}  </span>
<span> High:{props.high} </span>
<span>Low:{props.low}</span>
<footer>

</footer>

    
    </Card>
    </Modal>
  )
}

export default Forecast