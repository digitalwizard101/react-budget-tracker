import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";


const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);
    const [filtered, setFiltered] = useState(!localStorage.getItem("budget-data") ? expenses : JSON.parse(localStorage.getItem("budget-data")))




    useEffect(() => {
        setFiltered(expenses)
    }, [expenses])




    const deleteItem = (id) => {

        dispatch(
            {
                type: "DELETE_EXPENSE",
                payload: id
            }
        )


    }

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.text.toLowerCase().includes(event.target.value)
        );
        setFiltered(searchResults);
    };




    useEffect(() => {
        localStorage.setItem("budget-data", JSON.stringify(expenses))

    }, [expenses])


    // .filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))


    return (
        <div className="container-fluid">
            <h1>Expenses</h1>
            <div>
                <input

                    onChange={(event) => handleChange(event)}
                    type="text"
                    placeholder="Search Expense..."
                    className="form-control w-100 mb-4"
                />
            </div>

            <ol className="list-group  ">
                {filtered?.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="list-group-item  d-flex justify-content-between mb-2"
                        >
                            <span>
                                <strong>{item.text.toLocaleUpperCase()}</strong>
                            </span>

                            <div>
                                <span className="badge badge text-bg-danger">₹{item.cost}</span>
                                <FontAwesomeIcon onClick={() => deleteItem(item.id)} icon={faCircleXmark} id="item-icon" />
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default ExpenseList;
