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

	const editItemFromList = (index, newText) => {
		let tmpArray = [];
		for (let i = 0; i < toDoItems.length; i++) {
			if (i === index)
				tmpArray.push(newText);
			else
				tmpArray.push(toDoItems[i]);
		}
		setToDoItems(tmpArray);
	} 

	return(
		<>
			<List 
				toDoItems={ toDoItems }
				deleteItemFromList={(index) => deleteItemFromList(index)}
				editItemFromList={(index, newText) => editItemFromList(index, newText)}
			/>

			<AddItem 
				addItemToList={(itemToAdd) => addItemToList(itemToAdd)}

			/>
		</>
	)
}

export default App;