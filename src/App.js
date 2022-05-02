import { useState } from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";

const App = () => {

	const [toDoItems, setToDoItems] = useState([]);

	const addItemToList = itemToAdd => {
		setToDoItems(toDoItems => [...toDoItems, itemToAdd]);
	}

	const deleteItemFromList = index => {
		const tmpArray = (toDoItems.filter((el, i) => index !== i));
		setToDoItems(tmpArray);
	}

	return(
		<>
			<List 
				toDoItems={ toDoItems }
				deleteItemFromList={(index) => deleteItemFromList(index)}
			/>

			<AddItem 
				addItemToList={(itemToAdd) => addItemToList(itemToAdd)}

			/>
		</>
	)
}

export default App;
