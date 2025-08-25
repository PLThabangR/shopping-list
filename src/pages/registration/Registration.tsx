import React from 'react'


const Registration = () => {


  return (
    <div>
<div className="flex justify-center items-center min-h-screen ">
  <div className="w-full max-w-2xl p-6 bg-base-100 rounded-xl shadow-md">
    <h1 className="text-4xl mb-6 font-bold text-center text-[#3C3D42]">Registration</h1>

    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Password</label>
</div>

  </div>
</div>
   










    </div>
  )
}

export default Registration