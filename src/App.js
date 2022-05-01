import { useState } from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";

const App = () => {

	const [toDoItems, setToDoItems] = useState([]);

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
