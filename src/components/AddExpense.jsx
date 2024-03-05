import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFaceSadCry,
    faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";

const AddExpense = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);

    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [message, setMessage] = useState(false);
    const [alert, setAlert] = useState("");
    const [emoji, setEmoji] = useState(
        <FontAwesomeIcon icon={faFaceSadCry} shake />
    );

    const totalExp = expenses.reduce((total, c) => {
        total = Number(total) + Number(c.cost);

        return total;
    }, 0);

    let rem = budget - totalExp;

    //

    const addItem = (event) => {
        event.preventDefault();

        if (name === "" || cost === "") {
            setMessage(false)
        } else if (name !== "" && cost !== "" && totalExp < budget && cost <= rem) {
            dispatch({
                type: "ADD_EXPENSE",
                payload: { id: uuidv4(), text: name.toLowerCase(), cost: Number(cost) },
            });
        } else {
            setMessage(true);

            setAlert(" Well what do we have here !!!");
            setEmoji(
                <FontAwesomeIcon
                    icon={faFaceGrinWide}
                    bounce
                    size="lg"
                    style={{ color: "#ff3ddf" }}
                />
            );
            setTimeout(() => {
                setAlert(`It looks like you are broke !!! `);
                setEmoji(
                    <FontAwesomeIcon
                        icon={faFaceSadCry}
                        style={{ color: "#ff3ddf" }}
                    size="lg"
                    shake
                    />
                );
            }, 1500);

            setTimeout(() => {
                setMessage(false);
            }, 4000);
        }



        setCost("")
        setName("")
    };

    return (
        <div className="container-fluid pb-3 mb-5 ">
            <h1>Add Expenses</h1>

            <div>
                {message ? (
                    <div className="alert alert-danger text-center">
                        {" "}
                        {alert} {emoji}{" "}
                    </div>
                ) : null}
                <form>
                    <div className="row">
                        <div className="col-md-5 mb-2">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Expense name..."
                                required
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div required className="col-md-5 mb-2">
                            <input
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                                placeholder="Expense cost..."
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-2">
                            <button
                                onClick={(event) => addItem(event)}
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddExpense;
