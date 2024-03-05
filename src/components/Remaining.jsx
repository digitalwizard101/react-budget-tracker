import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext)


    let totalExp = expenses.reduce((a, c) => a + c.cost, 0)

    let remain = budget - totalExp






    return (
        <div className='container-fluid alert alert-success'>
            <strong>
                Remaining: ₹{remain}
            </strong>






        </div>
    )
}

export default Remaining