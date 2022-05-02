
const ListItem = props => {
    return(
        <li>
            { props.children } 
            <button>Edit</button>
            <button onClick={ () => props.deleteItemFromList(props.itemIndex) }>Delete</button>
        </li>
    );
}

export default ListItem;