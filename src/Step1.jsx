import React from 'react'

function Step1() {
  return (
    <div className='cardForm'>
      <div className='flex flex-row justify-between items-end mb-6'>
        <h2 className='text-title text-xl font-normal'>Create a job</h2>
        <span className='text-title text-base font-normal'>Step 1</span>
      </div>
      <div className='mb-24'>
        <div className="text-left mb-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Job Title <span className='text-error'>*</span></span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="ex. UX UI Designer" />
          </label>
        </div>
        <div className="text-left mb-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Company name <span className='text-error'>*</span></span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="ex. Google" />
          </label>
        </div>
        <div className="text-left mb-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Industry <span className='text-error'>*</span></span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="ex. Information Technology " />
          </label>
        </div>
        <div className="text-left mb-6 flex flex-row justify-between gap-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Location</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="ex. Chennai" />
          </label>
          <label className="block">
            <span className="text-dark text-sm font-medium">Remote type</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="ex. In-office" />
          </label>
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        <button type="button" className='btn'>Next</button>
      </div>
    </div>
  )
}

export default Step1