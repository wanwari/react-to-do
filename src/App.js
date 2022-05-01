import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";

const App = () => {

	const [toDoItems, setToDoItems] = useState(["one", "two"]);

	const addItemToList = itemToAdd => {
		setToDoItems(toDoItems => [...toDoItems, itemToAdd]);
	}

	return(
		<>
			<List toDoItems={ toDoItems }/>
			<AddItem addItemToList={(itemToAdd) => addItemToList(itemToAdd) }/>
		</>
	)
}

export default App;
