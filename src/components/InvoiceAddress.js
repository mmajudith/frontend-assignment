import React from 'react'

function InvoiceAddress() {
  return (
    <div className="address-wrapper">

        <p className="bill">Bill To:</p>

            <div className="invoNo">
                <p>Invoice No</p>
                <p>#2000098</p>
            </div>

            <div className="comp">
                <label>Company *</label><br></br>
                <input type="text" id="name"/>
            </div>

            <div className="email">
                <label>Email *</label><br></br>
                <input type="email" />
            </div>

            <div className="invoDa">
                <label>Invoice Date *</label><br></br>
                <input type="date" id="date"/>
            </div>

            <div className="invoDue">
                <label>Due Date *</label><br></br>
                <input type="date" id="dueDate"/>
            </div>
    </div>
  )
}

export default InvoiceAddress
