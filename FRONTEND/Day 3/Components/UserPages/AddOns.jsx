import UserNavbar from "../UserNavbar"
import { useState } from 'react';
import "./UserPages.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddOnCards from './AddOnCards'

const AddOns = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <UserNavbar/>
      <div className="addons-body">
        <br/>
          <div className='addons-dropdown'>
            <p className="addons-p">Select your service provider&nbsp;&nbsp;</p>
            <Select
              value={selectedValue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Select an option' }} style = {{width:300,height:40}}
            >
              <MenuItem value="" disabled>Select an option</MenuItem>
              <MenuItem value="option1">Jio</MenuItem>
              <MenuItem value="option2">Airtel</MenuItem>
              <MenuItem value="option3">BSNL</MenuItem>
              <MenuItem value="option3">VI</MenuItem>
              <MenuItem value="option3">Docomo</MenuItem>
            </Select>
          </div>
        
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