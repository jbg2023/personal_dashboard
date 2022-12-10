import React, { useState } from 'react'
import './Clock.css'

const Clock = () => {
	// For digital clock
	let time = new Date().toLocaleTimeString();
	let [ctime, setCTime] = useState();
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCTime(time);
	}
	setInterval(updateTime, 1000);
	return (
		<>
        <h2 id="clocktime"> {ctime}.</h2>
		</>);
}
export default Clock;