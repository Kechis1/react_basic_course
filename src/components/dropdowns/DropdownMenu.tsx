import {Button} from "../buttons/Button";
import {Menu} from "../menu/Menu";
import {useState} from "react";

export function DropdownMenu() {
	const items = ['www.google.com', 'www.instagram.com', 'www.facebook.com'];
	let [show, setShow] = useState(false);
	function handleClick() {
		setShow(!show);
	}

	return (
		<div>
			<Button onMyClick={handleClick}></Button>
			{show &&
			<Menu>
				<ul>
					{items.map((item: string, index: number) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</Menu>
			}
		</div>
	)
}