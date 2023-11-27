import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

function JobForm() {
  return (
    <div className='flex flex-row gap-5 justify-center items-center h-screen'>
      <Step1 />
      <Step2 />
    </div>
  )
}

export default JobForm