import {useEffect, useState} from "react";
import axios from "axios";

type Joke = {
	value: string,
}

export function ChuckNorris() {
	let [joke, setJoke] = useState<Joke>({value:""});
	let [jokes, setJokes] = useState<Joke[]>([]);

	useEffect(() => {
		loadAnother();
	}, []);

	function loadAnother() {
		axios.get("https://api.chucknorris.io/jokes/random", {})
		.then(response => {
			setJoke(response.data);
			setJokes([...jokes, response.data]);
		})
	} 


	return (
		<div>
			<h2>Chuck Norris Joke</h2>
			<h3 style={{color: "red"}}>{joke?.value}</h3>
			<button type={"button"} onClick={loadAnother}>Load another</button>

			<h2>Chuck Norris Jokes history</h2>
			<ul>
				{jokes.map((joke: Joke, index: number) => (
					<li key={index}>{joke.value}</li>
				))}
			</ul>
		</div>
	)
}