import React, { useState } from 'react'
import Header from './Header'
import Invoice from './Invoice'
import CreatedInvoices from './viewInvoiceComponents/CreatedInvoices'
import Footer from './Footer'
import { state } from './data/itemsData'
import { Route } from 'react-router-dom'

function AppBody() {

    const [data, setData] = useState(state)

    const addData = (newData) =>{
      setData([newData, ...data])
    }

  return (
    <div className="container">

        <Header />

        <Route exact path="/frontend-assignment">
          <CreatedInvoices data={data}/>
        </Route >
        <Route exact path="/frontend-assignment/invoices">
          <Invoice addData={addData}/>
        </Route > 

        <Footer />

    </div>
  )
}

export default AppBody
