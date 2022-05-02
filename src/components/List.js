import ListItem from "./ListItem";

const List = ({ toDoItems, deleteItemFromList}) => {

    return(
        <ul>
            {toDoItems.map((item, index) => (
                <ListItem 
                    key={ index }
                    itemIndex={ index }
                    deleteItemFromList={(index) => deleteItemFromList(index)}>
                        { item }
                </ListItem>
            ))}
        </ul>
    );
}

export default List;