import {NumberCount} from "../components/numbers/NumberCount";
import {PrintArray} from "../components/PrintArray";
import {DynamicTable} from "../components/tables/DynamicTable";
import {NumberGenerator} from "../components/numbers/NumberGenerator";
import {MouseMovement} from "../components/movements/MouseMovement";
import {NumberAutomaticCounter} from "../components/numbers/NumberAutomaticCounter";
import {useState} from "react";
import {DropdownMenu} from "../components/dropdowns/DropdownMenu";
import {Input} from "../components/inputs/Input";
import {ChuckNorris} from "../components/ChuckNorris";

export function Main() {
	let [automaticCounter, setAutomaticCounter] = useState(true);
	function toggleAutomaticCounter () {
		setAutomaticCounter(!automaticCounter);
	}

	return (
		<main className="Main">
			{/*<NumberCount></NumberCount>
			<PrintArray></PrintArray>
			<DynamicTable columns={4} rows={3}></DynamicTable>
			<NumberGenerator pregeneratedCount={5}></NumberGenerator>
			<MouseMovement></MouseMovement>
			<button type={"button"} onClick={toggleAutomaticCounter}>Toggle automatic counter</button>
			{ automaticCounter &&
				<NumberAutomaticCounter></NumberAutomaticCounter>
			}
			<DropdownMenu></DropdownMenu>
			<NumberAutomaticCounter></NumberAutomaticCounter>*/}
			<ChuckNorris></ChuckNorris>
		</main>
	)
}