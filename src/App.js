import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppContext, AppProvider } from "./context/AppContext";

const App = () => {


  return (
    <AppProvider>
      <div className="container">
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-12">
              <h1>My Budget Planner</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-md-4">
              <Budget />
            </div>
            <div className="col-md-4">
              <Remaining />
            </div>
            <div className="col-md-4">
              <Spent />
            </div>
          </div>
        </div>

        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-md-12">
              <ExpenseList />
            </div>
          </div>
        </div>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-md-12">
              <AddExpense />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
