import { useState } from 'react';

const AddItem = props => {

    const [itemToAdd, setItemToAdd] = useState("");

    return(
        <>
            <form>
                <input
                    id="listItemToAdd"
                    type="text"
                    placeholder="feed the chickens"
                    value={itemToAdd}
                    onChange={(event) => { setItemToAdd(event.target.value)}}
                />  
                <input 
                    type="button"
                    value="submit"
                    onClick={() => {props.addItemToList(itemToAdd)}}
                />
            </form>
            <p>To Add: { itemToAdd }</p>
        </>
    );
}

export default AddItem;