import React from "react";

type Props = {
	children: React.ReactNode,
}

export function Menu(props: Props) {
	return (
		<div>{props.children}</div>
	)
}