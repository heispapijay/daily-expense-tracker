import './App.css';
import { GlobalApiProvider } from './context/_api';
import { AddTransaction, Balance, Header, IncomeExpenses, TransactionHistory } from './components';

function App() {
  return (
    <GlobalApiProvider>
      <Header />
      <div className="wrapper">
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalApiProvider>
  );
}

export default App;
