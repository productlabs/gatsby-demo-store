import React, { useContext, useState } from 'react'

import { CustomerContext } from '../context'
import PageTitle from '../components/PageTitle'
import { Form } from 'react-final-form'
import Input from '../components/Input'
import SideMenu from '../components/SideMenu'

import { Link } from 'gatsby'

function OrderPage() {
  const { fullName, email } = useContext(CustomerContext)
  const { updateCustomerInfo, allOrders, orderDetails } = useContext(CustomerContext)
  const [customerError, setCustomerError] = useState(null)
  const [isEditData, setIsEditData] = useState(false)

  async function onSubmit({ name, email, password }) {
    try {
      await updateCustomerInfo(name, email, password)
      handleHideEditData()
    } catch ({ errors: [{ detail = 'Incorrect details. Try again.' }] }) {
      setCustomerError(detail)
    }
  }

  function handleHideEditData() {
    setIsEditData(false)
    setCustomerError(null)
  }

  function handleShowEditData() {
    setIsEditData(true)
  }

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
            <button
              onClick={orderDetails}
              type="button"
              className="mr-4 w-48 appearance-none bg-black border border-black text-white hover:text-white px-4 py-3 leading-tight rounded-none focus:outline-none mt-4 no-underline"
            >
              Get Order Details
            </button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default OrderPage
