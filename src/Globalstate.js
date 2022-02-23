import { createContext, useReducer } from "react"
import Appreducer from "./Appreducer";
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: -150 }
    ]
}

export const GlobalContext=createContext(initialState);

export const Globalstate = ({children}) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);

    function deleteTransaction(id)
    {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }

    function Addtransaction(transaction)
    {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }
  return (
    <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, Addtransaction}}>
            {children}
    </GlobalContext.Provider>
  )
}
