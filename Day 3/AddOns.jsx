import UserNavbar from "../UserNavbar"
import { useState } from 'react';
import "./UserPages.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
          <div className="addon-card-set">
            <div className="addon-card">
              <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image"width = {120} height = {"auto"}/>
              <div className="addon-details">
                <div className="addon-title">2 GB Data Booster</div>
                <div className="addon-price">Rs. 50</div>
              </div>
            </div>
            <div className="addon-card">
              <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image"width = {120} height = {"auto"}/>
              <div className="addon-details">
                <div className="addon-title">5 GB Data Booster</div>
                <div className="addon-price">Rs. 100</div>
              </div>
            </div>

            <div className="addon-card">
              <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image"width = {120} height = {"auto"}/>
              <div className="addon-details">
                <div className="addon-title">10 GB Data Booster</div>
                <div className="addon-price">Rs. 150</div>
              </div>
            </div>

            <div className="addon-card">
              <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image" width = {120} height = {"auto"}/>
              <div className="addon-details">
                <div className="addon-title">10 GB Data Booster</div>
                <div className="addon-price">Rs. 150</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddOns