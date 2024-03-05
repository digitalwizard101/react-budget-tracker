import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)
    const [edit, setEdit] = useState(false)
    const [budgetValue, setBudgetValue] = useState('')





    const editBudget = () => {

        if (budgetValue > 0) {

            dispatch({
                type: "EDIT_BUDGET",
                payload: Number(budgetValue)
            })
        }

        setEdit(false)


    }




    return (
        <div className='container-fluid  alert alert-warning d-flex align-item-center justify-content-between '>

            {
                edit ? <   >
                    <input type="number" placeholder='Enter budget...' className='form-control' value={budgetValue} onChange={(e) => setBudgetValue(e.target.value)} />
                    <button onClick={() => editBudget()} className='btn btn-success rounded btn-sm'>
                        save
                    </button>
                </> :
                    <>


                        <strong>
                            Budget: ₹{budget}
                        </strong>

                        <button onClick={() => setEdit(true)} className='btn btn-danger btn-sm'>
                            Edit
                        </button>
                    </>
            }









        </div>
    )
}

export default Budget