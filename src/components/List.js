import ListItem from "./ListItem";

const List = ({ toDoItems }) => {
    return(
        <ul>
            {toDoItems.map((item, index) => (
                <ListItem key={ index }>{ item }</ListItem>
            ))}
        </ul>
    );
}

export default List;