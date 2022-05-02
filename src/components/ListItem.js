import { useState } from "react";

const ListItem = props => {

    const [displayEditBox, setDisplayEditBox] = useState(false);
    const [editBoxContent, setEditBoxContent] = useState(props.children);

    const updateValue = () => {
        props.editItemFromList(props.itemIndex, editBoxContent);
        setDisplayEditBox(false);
    }

    let editBox;
    if (displayEditBox) {
        editBox = 
            <div>
                <input 
                    type="text"
                    value={editBoxContent}
                    onChange={(event) => setEditBoxContent(event.target.value)}
                />
                <button onClick={updateValue}>Save</button>
            </div>;
    }

    return(
        <>
            <li>
                { props.children } 
                <button onClick={() => setDisplayEditBox(displayEditBox ? false : true)}>EDIT</button>
                <button onClick={() => props.deleteItemFromList(props.itemIndex)}>Delete</button>
            </li>
            {editBox}
        </>
    );
}

export default ListItem;