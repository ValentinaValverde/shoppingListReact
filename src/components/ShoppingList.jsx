import { useState } from 'react'

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
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Young+Serif&display=swap');
            </style>


            <div className='container'>
                <div className='leftSide'>
                    <h1>cart.</h1>
                    <form onSubmit={handleSubmit} >
                        <label> What do you need?
                            <br />
                            <input type="text" onChange={(event) => { setValue(event.target.value) }} />
                            <br />
                        </label>
                        <button type="submit">add to list</button>
                    </form>
                    <form>
                        <button type="submit">reset</button>
                    </form>

                </div>

                <div className='list'>
                    <h2>List</h2>
                    <div className='output'>
                        {itemList.map((item, index) =>
                            <li key={index}>{item}</li>
                            )}
                    </div>
                </div>
            </div>


        </>
    )
}