import UserNavbar from "../UserNavbar"
import { useState } from 'react';
import "./UserPages.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddOnCards from './AddOnCards'


const AddOns = () => {

  // const [selectedValue, setSelectedValue] = useState('');
  
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <>
      <UserNavbar/>
      <div className="addons-body">
        <br/>
        
        <br/><br/><br/><br/>
        <div className="add-ons-container">
          <div className="current-plan">
          <h2>CURRENT PLAN</h2>
            <p className="current-plan-p" style = {{color:"#333"}}>Plan: Rs. 509</p>
            <p className="current-plan-p" style = {{color:"#333"}}>Data: 6 GB</p>
            <p className="current-plan-p" style = {{color:"#333"}}>Validity: 1 month</p>
            <p className="current-plan-p" style = {{color:"#333"}}>Additional benefits: Get Rs.100 Cashback on FastTag</p>

          </div>
          <AddOnCards/>
        </div>
      </div>
    </>
  )
}

export default AddOns