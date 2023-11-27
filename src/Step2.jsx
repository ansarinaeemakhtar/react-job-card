import React from 'react'

function Step2() {
  return (
    <div className='cardForm'>
      <div className='flex flex-row justify-between items-end mb-6'>
        <h2 className='text-title text-xl font-normal'>Create a job</h2>
        <span className='text-title text-base font-normal'>Step 2</span>
      </div>
      <div className='mb-24'>
        <div className="text-left mb-6 flex flex-row justify-between gap-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Experience</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="Minimum" />
          </label>
          <label className="block">
            <span className="text-dark text-sm font-medium">&nbsp;</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="Maximum" />
          </label>
        </div>
        <div className="text-left mb-6 flex flex-row justify-between gap-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Salary</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="Minimum" />
          </label>
          <label className="block">
            <span className="text-dark text-sm font-medium">&nbsp;</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="Maximum" />
          </label>
        </div>
        <div className="text-left mb-6">
          <label className="block">
            <span className="text-dark text-sm font-medium">Total employee</span>
            <input type="text" className="mt-1 py-2 px-3 block w-full rounded-[5px] border-border shadow-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-placeholder" placeholder="ex. 100" />
          </label>
        </div>
        <div className="text-left mb-6">
          <span className="text-dark text-sm font-medium">Apply type</span>
          <div className="flex flex-row mt-1">
            <label class="inline-flex items-center">
              <input type="radio" name='applyType' value='quick' />
              <span class="ml-1">Quick apply</span>
            </label>
            <label class="inline-flex items-center ml-4">
              <input type="radio" name='applyType' value='external' />
              <span class="ml-1">External apply</span>
            </label>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        <button type="button" className='btn'>Save</button>
      </div>
    </div>
  )
}

export default Step2