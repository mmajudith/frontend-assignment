import React from 'react'
import InvoiceAddress from './InvoiceAddress'
import { Link } from 'react-router-dom'

function Invoice() {
  return (
    <div className="generate-invoice">
        
        <InvoiceAddress />

        <form >

            <div className="input-fields-wrapper">
                <div className="item">
                    <label>Item</label><br/>
                    <input type="text"/><br />
                    <input type="text"/><br />
                    <input type="text"/><br />
                    <input type="text"/><br />
                    <input type="text"/><br />
                </div>

                <div className="qty">
                    <label>Qty</label><br/>
                    <input type="number"/><br />
                    <input type="number"/><br />
                    <input type="number"/><br />
                    <input type="number"/><br />
                    <input type="number"/><br />
                </div>

                <div className="price">
                    <label>Price</label><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                </div>

                <div className="amount">
                    <label>Amount</label><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                    <input type="number"/><br/>
                </div>
            </div>

            <div className="flex">
            <div className="note-wrapper">
                <p className="note">Notes:</p>
                <p>Thanks for your patronage. Use the bank details attached to 
                    this mail to make your payment.
                </p>
            </div>

            <div className="total-wrapper">
                <label className="total">Total</label><br/>
                <input type="number"/>
            </div>
            </div>

            <div className="buttons-wrapper">
                <div className="send-wrapper">
                <Link to="/frontend-assignment/viewInvoices"><button className="send">send invoice</button></Link>
                </div>
                <div className="view-wrapper">
                    <Link to="/frontend-assignment/viewInvoices"><button className="view">view invoices</button></Link>
                </div>    
            </div>
            
        </form>
        
    </div>
  )
}

export default Invoice
