import React from 'react'
import { DropDownNavbar } from '../navbar/DropDownNavbar'
import { PaymentComponent } from './PaymentComponent'

export const PaymentPage = () => {
  return (
    <div>
      <DropDownNavbar />
      <PaymentComponent />
    </div>
  )
}

