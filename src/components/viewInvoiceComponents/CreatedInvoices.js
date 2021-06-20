import React from 'react'
import { Link } from 'react-router-dom'

function CreatedInvoices({data}) {

    let datas = Array.from(data)


  return (
    <div className="invoices-container">

        <div className="search-wrapper">
            <div className="input-wrapper">
                <input type="search" placeholder="Search invoice"/>
            </div>
            <p>Done</p>
        </div> 

        <div className="invoices-wrapper">

            {
                datas.map((el, id)=>{
                    return(
                        <div key={id} className="border">
                            <div className="cus-name">
                                <p>{el.name}</p>
                                <p>${el.totalAmount}</p>
                            </div>
                            <div className="cus-pay-date">
                                <p>{el.date}</p>
                                <div style={{fontWeight: 700}}>
                                    {el.isPaid === "paid" ? <p style={{color: "green"}}>{el.isPaid}</p> : 
                                    el.isPaid === "due" ?  <p style={{color: "crimson"}}>{el.isPaid}</p>:
                                    <p style={{color: "darkorange"}}>{el.isPaid}</p>}
                                </div>
                            </div>
                            <div className="send-btn-wrapper">
                                <button className="send-btn">{el.send}</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>

        <div className="new-btn">
           <Link to="/frontend-assignment/invoices"><button>New Invoice</button></Link> 
        </div>

    </div>
  )
}

export default CreatedInvoices
