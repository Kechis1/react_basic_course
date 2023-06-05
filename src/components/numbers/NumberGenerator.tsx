import {useState} from "react";

type Props = {
	pregeneratedCount: number
}
export function NumberGenerator(props: Props) {
	let [generatedNumbers, setGeneratedNumbers] = useState<number[]>(
		[...Array(props.pregeneratedCount)].map(() => Math.random())
	);
	function generateNew() {
		setGeneratedNumbers([...generatedNumbers, Math.random()]);
	}
	return (
		<div>
			{generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
			<button type="button" onClick={generateNew}>Generate new</button>
		</div>
	)
}