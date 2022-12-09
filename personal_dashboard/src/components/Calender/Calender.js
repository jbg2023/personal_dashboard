import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'


function Calender() {
  const [ date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date)
  };

  return (
    <>
      <Calendar onChange={onChange} value={date} />
    </>
  );
}
export default Calender