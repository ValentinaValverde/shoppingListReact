import {useState} from 'react'

export const MyForm = () => {
    const [itemList, setItemList] = useState([]);
    const [value, setValue] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        setItemList([value, ...itemList]);
        console.log("VALUE: ", value)
    }

    console.log("ITEM LIST:", itemList);

    return (
        <>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit} >
                <label> What do you need?
                    <br />
                    <input type="text" onChange={(event) => {setValue(event.target.value)}} />
                    <br />
                </label>
                <br />
                <button type="submit">Generate List</button>
            </form>

            <br />

            <label> List: </label>
                {itemList.map((item, index) => 
                <li key={index}>{item}</li>)}
  
        </>
    )
}