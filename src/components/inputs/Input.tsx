import {ChangeEvent} from "react";

type Props = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export function Input(props: Props) {

	return (
		<input onChange={(event) => props.onChange(event)} type={"number"}></input>
	)
}