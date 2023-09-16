import React from 'react'

const Form = () => {
  return (
    <>
        <div className='container d-flex justify-content-center'>
            <form className='border m-3 p-3'>
                <div className='text-center'>
                    <h3>Contact Form</h3>
                </div>
                <label className='form-label h5'>Name</label> <span className='text-danger'>*</span>
                <div className='d-flex'>
                    <div className='me-2'>
                    <input type="text" className='form-control' required="true" />
                    <label className='form-label'>first</label>
                    </div>
                    <div>
                    <input type="text" className='form-control' required="true"/>
                    <label className='form-label'>last</label>
                    </div>
                </div>

                <div>
                <label className='form-label h5 mt-2'>Email</label> <span className='text-danger'>*</span>
                <input type="email" className='form-control' required="true" />
                <label>Please provide a valid email address</label>
                </div>

                <div>
                <label className='form-label h5 mt-3'>Your inquiry</label> <span className='text-danger'>*</span>
                <textarea  className='form-control' />
                <label>Please provide your inquiry or feedback</label>
                </div>
                
                <button className='btn btn-success form-control mt-2'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form
