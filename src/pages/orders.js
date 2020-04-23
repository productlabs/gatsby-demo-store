import React, { useContext, useState } from 'react'

import { CustomerContext } from '../context'
import SideMenu from '../components/SideMenu'

function OrderPage() {
  const { allOrders } = useContext(CustomerContext)

  return (
    <React.Fragment>
      <div className="flex flex-wrap ">
        <SideMenu />
        <div className="flex-auto text-grey-darker px-4 py-2 m-2 mb-4">
          <h3 className="my-4">
            Purchase History
          </h3>

          <div className="max-w-sm">
            <button
              onClick={allOrders}
              type="button"
              className="mr-4 w-48 appearance-none bg-black border border-black text-white hover:text-white px-4 py-3 leading-tight rounded-none focus:outline-none mt-4 no-underline"
            >
              GetAllOrders
            </button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default OrderPage
