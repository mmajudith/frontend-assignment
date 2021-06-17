import React from 'react'

function ViewInvoices() {
  return (
    <div className="invoices-container">

        <div className="search-wrapper">
            <div className="input-wrapper">
                <input type="search" placeholder="Search invoice"/>
            </div>
            <p>Done</p>
        </div> 

        <p className="month">May 2021</p>

        <div className="invoices-wrapper">
            <div className="border">
                <div className="cus-name">
                    <p>John Jones</p>
                    <p>$900.00</p>
                </div>
                
                <div className="cus-pay-date">
                    <p>14th - 25th May 2021</p>
                    <p className="green">paid</p>
                </div>
            </div>
                
            <div className="border">
                <div className="cus-name">
                    <p>David Smith</p>
                    <p>$150.00</p>
                </div>
                <div className="cus-pay-date">
                    <p>22nd May - 1st June 2021</p>
                    <p className="crisom">due</p>
                </div>
                
            </div>

            <div className="border">
                <div className="cus-name">
                    <p>CodeAfri</p>
                    <p>$2430.00</p>
                </div>
                <div className="cus-pay-date">
                    <p>26th May - 26th June 2021</p>
                    <p className="yellow">outstanding</p>
                </div>   
            </div>

        </div>

        <div className="new-btn">
            <button>New Invoice</button>
        </div>

    </div>
  )
}

export default ViewInvoices
