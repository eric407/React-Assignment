import React from 'react';
import logo from './logo.svg';
import './App.css';

const employee = {
  'Name': 'Alan Ford',
  'EmployeeID': '00005152' ,
  'Appointment-on':'09:00 (24-05-2022)',
  'Email':'tom.ford.co.in',
  'Phone':'+91456735432',
  'Status':'In Progress',
  'Door':'Mark',
  'Time':'10:30',
  'profileImg': 'https://www.w3schools.com/howto/img_avatar.png'
}


var arrow="<"
function App() {
  return (
    <div className='site-container'>
      <div className='container'>
        <div className='header'>
          <p className='headarrow' id='arrow'>{arrow} </p>
          <div className='centerhead'>
            <h2 className='nameid'>{employee.Name}</h2>
            <p className='nameid' id='graytext'>{employee.EmployeeID}</p>
          </div>
          <button className='btn'>Print</button>

          <div className='customer-info'>
            <div>
              <h3 className='blocktext'>Appointment on </h3> 
              <span className='details'>{employee['Appointment-on']}</span>
            </div>
            <div>
              <h3 className='blocktext'>Email: </h3> 
              <span className='details'>{employee.Email}</span>
            </div>
            <div>
              <h3 className='blocktext'>Phone </h3> 
              <span className='details'>{employee.Phone}</span>
            </div>
          </div>

          <div className='order-info'>
            <div className='order-details'>
              <h3>Status</h3>
              <ul>
                <li >{employee.Status}</li>
              </ul>

            </div>
            <div className='order-details'>
              <h3>Door</h3> 
              <p>{employee.Door}</p>
            </div>
            <div className='order-details'>
              <h3 >Time</h3> 
              <p>{employee.Time} <span className='details'>(24-05-2022)</span></p>
            </div>

          </div>


          <div className='product-list'>
            <input className='check' type='checkbox'></input>
            <img src={employee.profileImg}></img>

            <div className='product-details'>
              <h3>Boltart Bolbessen</h3>
              <p>This is the product details of above product This is the product details of above product.</p>
            </div>
            <p className='product-details' id='lastarrow'>{arrow}</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
