import React from 'react'
import InvoiceAddress from './InvoiceAddress'
import { Link, useHistory } from 'react-router-dom'

function Invoice({setData}) {

    const  history  = useHistory();

    const goBackHandler = () =>{
        history.goBack()
      }

    const addInvoiceHandler = (e)=>{
        
        e.preventDefault()

        let name = e.target.elements.name.value;
        let totalAmount = e.target.elements.total.value;
        let date = e.target.elements.date.value;
        let isPaid = "outstanding";
        let send = "send";
        let addData = {
            name,
            totalAmount,
            date,
            isPaid,
            send
        }

        setData((prev)=>{
            return [...prev, addData]
        });

        goBackHandler();

    }

  return (
    <div className="generate-invoice">  

        <form onSubmit={addInvoiceHandler}>
            <InvoiceAddress />
            <div className="input-fields-wrapper">
                <div className="item">
                    <label>Item</label><br/>
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <input type="text" /><br />
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
                <input type="number" id="total"/>
            </div>
            </div>

            <div className="buttons-wrapper">
                <div className="send-wrapper">
                <button type="submit" className="send">Add invoice</button>
            </div>
                <div className="view-wrapper">
                    <Link to="/frontend-assignment"><button className="view">view invoices</button></Link>
                </div>    
            </div>
            
        </form>
        
    </div>
  )
}

export default Invoice
