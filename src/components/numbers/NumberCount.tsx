import {useState} from "react";

export function NumberCount() {
	let [count, setCount] = useState(0);
	return (
		<div className="NumberCount">
			<h2>Number: { count }</h2>
			<button type={"button"} onClick={ () => setCount(++count) }>Add</button>
			<button type={"button"} onClick={ () => setCount(0) }>Reset</button>
		</div>
	)
}
