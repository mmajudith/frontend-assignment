import React from 'react'

function InvoiceAddress() {
  return (
    <div className="address-wrapper">

        <p className="bill">Bill To:</p>
        
        <div className="comp">
            <p>Company</p>
            <p>CodeAfri</p>
        </div>

        <div className="email">
            <p>Email</p>
            <p>info@codeafri.org</p>
        </div>

        <div className="invoNo">
            <p>Invoice No</p>
            <p>2000098</p>
        </div>

        <div className="invoDa">
            <p>Invoice Date</p>
            <p>26/05/2021</p>
        </div>

        <div className="invoDue">
            <p>Due Date</p>
            <p>6/05/2021</p>
        </div>

    </div>
  )
}

export default InvoiceAddress
