import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Globalstate';

export const Addtransaction = () => {
    const [text,setText]= useState("");
    const [amount, setAmount] = useState(0);

    const {Addtransaction} = useContext(GlobalContext);

    const Submit=e=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*100000),
            text,
            amount:parseInt(amount)
        }
        Addtransaction(newTransaction)
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={Submit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label for="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..."  value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button className="btn" type='submit'>Add transaction</button>
            </form>
        </>
    )
}
