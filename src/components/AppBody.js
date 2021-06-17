import React from 'react'
import Header from './Header'
import Invoice from './Invoice'
import ViewInvoice from './viewInvoiceComponents/ViewInvoices'
import Footer from './Footer'
import { Route } from 'react-router-dom'

function AppBody({data}) {
  return (
    <div className="container">

        <Header />

        <Route exact path="/frontend-assignment">
            <Invoice data={data}/>
        </Route> 
        <Route exact path="/frontend-assignment/viewInvoices" component={ViewInvoice}/>

        <Footer />

    </div>
  )
}

export default AppBody
