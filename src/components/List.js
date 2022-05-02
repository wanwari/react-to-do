import ListItem from "./ListItem";

const List = ({ toDoItems, deleteItemFromList, editItemFromList }) => {
    return(
        <>
            <ul>
                {toDoItems.map((item, index) => (
                    <ListItem 
                        key={ index }
                        itemIndex={ index }
                        deleteItemFromList={(index) => deleteItemFromList(index)}
                        editItemFromList={(index, newText) => editItemFromList(index, newText)}>
                            { item }
                    </ListItem>
                ))}
            </ul>
        </>
    );
}

export default List;