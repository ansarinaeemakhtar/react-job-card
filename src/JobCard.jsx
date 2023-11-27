import React from 'react'

function JobCard({job}) {
  return (
    <div className='flex flex-row w-[728px] py-4 px-6 border border-borderCard rounded-10px'>
      <div className='thumbnail block h-12 w-12 mr-2 rounded-[5px] overflow-hidden'>
        <img src={job.thumb} className='block h-12 w-12' alt="thumbnail" />
      </div>
      <div className='text-left text-black'>
        <h2 className='text-2xl font-normal'>{job.title}</h2>
        <div className='text-base font-normal mb-6'>
          <div className=''>{job.company}</div>
          <h4 className='text-cardJob-100'>{job.address}</h4>
        </div>
        <div className='text-cardJob-200 mb-6'>
          <div className='mb-2'>{job.shift}</div>
          <div className='mb-2'>{job.experience}</div>
          <div className='mb-2'>{job.salary}</div>
          <div className='mb-2'>{job.size}</div>
        </div>
        <div>
          {
            job.id%2 !== 0 ? <button type="button" className="btn">Apply Now</button> : <button type="button" className="btn-outline">External Apply</button>
          }
        </div>
      </div>
    </div>
  )
}

export default JobCard