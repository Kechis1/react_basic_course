import {useEffect, useState} from "react";
import styles from "./MouseMovement.module.css";

export const MouseMovement = () => {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	useEffect(() => {
		function handleMouseMove(e: MouseEvent) {
			setX(e.clientX)
			setY(e.clientY)
		}

		function handleClick(e: MouseEvent) {
			setClickPos({x: e.clientX, y: e.clientY})
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('click', handleClick)
		}
	})
	const [clickPos, setClickPos] = useState<{x: number, y: number}>({x: 0, y: 0})


	return (
		<div>
			<h2>Mouse Movement</h2>
			<h3 className={clickPos.x > x ? styles.green : styles.red}>Mouse position: x:{x}, y: {y}</h3>
		</div>
	)
}