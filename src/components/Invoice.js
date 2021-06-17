import React from 'react'
import InvoiceAddress from './InvoiceAddress'

function Invoice({data}) {
  return (
    <div className="generated-invoice">
        
        <InvoiceAddress />

        <table>
            <thead>
                <tr>
                    <th className="left">item</th>
                    <th className="left">Description</th>
                    <th className="right">Qty</th>
                    <th className="center">Price</th>
                    <th className="right">Amount</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    data.map((el,id) =>{
                        return(
                            <tr key={id}>
                                <td className="left">{el.item}</td>
                                <td className="left">{el.description}</td>
                                <td className="right">{el.Qty}</td>
                                <td className="center">${el.price}</td>
                                <td className="right">${el.amount}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>

        <div className="flex">
            <div className="note-wrapper">
                <p className="note">Notes:</p>
                <p>Thanks for your patronage. Use the bank details attached to 
                    this mail to make a payment.
                </p>
            </div>

            <div className="total-wrapper">
                <p className="total">Total</p>
                <p className="sum">$2430.00</p>
            </div>
        </div>

        <div className="buttons-wrapper">
            <div className="send-wrapper">
                <button className="send">send invoice</button>
            </div>
            <div className="view-wrapper">
                <button className="view">view invoices</button>
            </div>    
        </div>
        
    </div>
  )
}

export default Invoice
