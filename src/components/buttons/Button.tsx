type Props = {
	onMyClick: () => void,
}

export function Button(props: Props) {
	return <button type={"button"} onClick={props.onMyClick}>Dropdown button</button>;
}