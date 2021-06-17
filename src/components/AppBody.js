import React from 'react'
import Header from './Header'
import Invoice from './Invoice'
// import ViewInvoice from './viewInvoiceComponents/ViewInvoices'
import Footer from './Footer'

function AppBody({data}) {
  return (
    <div className="container">

        <Header />

        <Invoice data={data}/>
        {/* <ViewInvoice /> */}

        <Footer />

    </div>
  )
}

export default AppBody
