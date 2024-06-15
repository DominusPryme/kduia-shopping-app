import React from 'react';
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import BudgetAllocation from './components/BudgetAllocation';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Shopping Cart</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <CartValue />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <SpentSoFar />
          </div>
        </div>
        <h3 className="mt-3">Items</h3>
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add/Reduce Item Quantity</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ItemSelected />
          </div>
        </div>
        <h3 className="mt-3">Budget Allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <BudgetAllocation />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
