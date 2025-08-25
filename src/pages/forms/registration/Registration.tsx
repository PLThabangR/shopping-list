import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Registration = () => {
 const Navigate = useNavigate();




  return (
    <div className='container content'>
          <form>
              <h1 className='form-header'>Registration</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="surname" className="form-label">Surname</label>
    <input type="password" className="form-control" id="surname"/>
  </div>

    <div className="mb-3">
    <label htmlFor="cellNumber" className="form-label">Cell number</label>
    <input type="password" className="form-control" id="cellNumber"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
    <p className='dont-have-accout'>Already havea account? <Link to="/login">Login</Link></p>
</form>     



    </div>
  )
}

export default Registration