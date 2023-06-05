type table = {
	columns: number,
	rows: number,
}

export function DynamicTable(props: table) {
	let rows: number[] = Array(props.rows).fill(1);
	let cols: number[] = Array(props.columns).fill(1);
	return (
		<div className="DynamicTable">
			<h2>Dynamic Table</h2>
			<table>
				<tbody>
				{rows.map((row, rowIndex) =>
					(
						<tr key={rowIndex}>
							{cols.map((column, colIndex) => (
								<td key={colIndex}>Hello</td>
							))}
						</tr>
					)
				)}
				</tbody>
			</table>
		</div>
	)
}