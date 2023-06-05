export function PrintArray() {
	let array: number[] = [1,2,3];
	return (
		<div className="PrintArray">
			<h2>Print Array: {array.map((item, index) => <span key={index}>{item}</span>)} </h2>
		</div>
	)
}