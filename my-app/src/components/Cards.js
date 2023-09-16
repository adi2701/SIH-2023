import React from 'react';
import stud from '../images/Student.png';
import adminpic from '../images/Admin.png';

export default function Cards() {
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center mt-5  mx-lg-2  mx-md-4 mx-sm-5  ">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center mt-2 mx-5">
          <div className="card" style={{ width: '20rem' }}>
            <img src={stud} className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title ">Student</h5>
              <p className="card-text">A little progress each day adds to a big result.</p>
              <a href="./login" className="btn btn-success w-100">Join in</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mx-lg-2 text-center mt-2 mx-5"> {/* Center on small screens */}
          <div className="card" style={{ width: '20rem' }}>
            <img src={adminpic} className="card-img-top" alt="Admin" />
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <p className="card-text">The finest mentors empower minds to uncover, not just memorize.</p>
              <a href="./login" className="btn btn-success w-100">Join in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
