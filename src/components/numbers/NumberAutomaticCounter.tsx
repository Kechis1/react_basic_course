import {ChangeEvent, useEffect, useState} from "react";
import {Input} from "../inputs/Input";

export const NumberAutomaticCounter = () => {
	let [count, setCount] = useState(0);
	let [increment, setIncrement] = useState(1);

	useEffect(() => {
		const ref = setInterval(() => setCount(currentCount => currentCount + increment), 1000);

		return () => clearInterval(ref);
	}, [])


	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setIncrement(Number(event.target.value));
	}

	return (
		<div className="NumberAutomaticCounter">
			<h2>Automatic counter: {count}</h2>
			<Input onChange={handleInputChange}></Input>
		</div>
	)
}