import React, { useEffect, useState } from 'react'
import { TOKEN,http } from '../util/setting';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Profile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const getProfileApi = async () => {
    try {
      const res = await http.post('/api/Users/getProfile');
      
      console.log(res.data.content);
      //Đưa vào state
      setProfile(res.data.content);
    } catch (err) {
      console.log(err);
      //Thất bại thì sẽ chuyển hướng trang
      alert('Đăng nhập để vào profile');
      navigate('/login');
    }

  }

  useEffect(() => {
    getProfileApi();
  }, [])

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 sidebar">
          <img src={profile.avatar} alt="User Avatar" className="img-fluid" />
          <h3>{profile.name}</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Setting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Signout</a>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="col-md-9">
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">About</h4>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Gender</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Male
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Projects</h4>
              <p>No recent projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Profile