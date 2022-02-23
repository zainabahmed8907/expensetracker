import './App.css';
import { Addtransaction } from './compoenents/Addtransaction';
import Balance from "./compoenents/Balance"
import { IncomeExpense } from './compoenents/IncomeExpense';
import { TransactionList } from './compoenents/TransactionList';
import { Globalstate } from './Globalstate';
function App() {
  return (
    <Globalstate>
    <div className="App">
      <h2>Expense Tracker</h2>
       <div className='container'>
         <Balance/>
         <TransactionList/>
         <IncomeExpense/>
          <Addtransaction/>
       </div>
    </div>
    </Globalstate>
  );
}

export default App;
