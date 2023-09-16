import React from 'react';
import aniimage from '../images/Anisha_Kumari_Lal_.jpg';
import { useNavigate } from 'react-router-dom';

export default function UserProfile(props) {
  const navigate = useNavigate();

    const submission=()=>{
        navigate({
            pathname:"/contact",
            
        }
        )
    }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
        <div className="col-3">
  <img
    src={aniimage}
    alt="User Profile"
    className="img-fluid rounded-circle"
    style={{ width: '150px', height: '150px' }}
    
  />
</div>
          <div className="col-9">
            <div className="mb-3">
              <h3>User Name</h3>
              <p>anshuman@gmail.com</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/edit-profile')}
            >
              Edit Profile
            </button>
            <button onClick={submission}  className="btn btn-success mx-4">
                Submit Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
