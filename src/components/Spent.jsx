import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spent = () => {
    const { expenses } = useContext(AppContext);


    const TotalExpenses = expenses.reduce((total, c) => {
        total = Number(total) + Number(c.cost)

        return total

    }, 0)





    return (
        <div className="container-fluid  alert alert-info">
            <strong>Expenses: ₹{TotalExpenses}</strong>
        </div>
    );
};

export default Spent;
