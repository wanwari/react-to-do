import { useState } from "react";

const ListItem = props => {

    const [displayEditBox, setDisplayEditBox] = useState(false);
    const [editBoxContent, setEditBoxContent] = useState(props.children);
    const [taskCompleted, setTaskCompleted] = useState(false);

    const updateValue = () => {
        props.editItemFromList(props.itemIndex, editBoxContent);
        setDisplayEditBox(false);
    }

    const completed = {textDecoration: "line-through"};

    let editBox;
    if (displayEditBox) {
        editBox = ( 
            <div>
                <input 
                    type="text"
                    onChange={(event) => setEditBoxContent(event.target.value)}
                />
                <button onClick={updateValue}>Save</button>
            </div>
        );
    }

    return(
        <>
            <li>
                <div style={ taskCompleted ? completed : null } onClick={() => setTaskCompleted(!taskCompleted)}>{ props.children }</div> 
                <button onClick={() => setDisplayEditBox(displayEditBox ? false : true)}>EDIT</button>
                <button onClick={() => props.deleteItemFromList(props.itemIndex)}>Delete</button>
            </li>
            {editBox}
        </>
    );
}

export default ListItem;