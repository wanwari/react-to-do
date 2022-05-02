import { useState } from 'react';

const AddItem = props => {

    const [itemToAdd, setItemToAdd] = useState("");

    const submitForm = () => {
        props.addItemToList(itemToAdd);
        setItemToAdd("");
    }

    return(
        <>
            <form onSubmit={(e) => {e.preventDefault(); submitForm()}}>
                <input
                    id="listItemToAdd"
                    type="text"
                    placeholder="feed the chickens"
                    value={itemToAdd}
                    onChange={(event) => {setItemToAdd(event.target.value)}}
                />  
                <input 
                    type="button"
                    value="submit"
                    onClick={() => submitForm()}
                />
            </form>
            <p>To Add: { itemToAdd }</p>
        </>
    );
}

export default AddItem;