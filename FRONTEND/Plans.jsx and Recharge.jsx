Plans.jsx
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './UserPages.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import UserNavbar from '../UserNavbar';

const Plans = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState('postpaid');
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (  
    <>
      <div className='plans-body-user'>
        <UserNavbar/>
        <h1 className="plans-heading">Plans</h1>
        <br/>
        <FormControl>
          <div className='centre-container'>
            <div className='dropdown'>
                <p>Select your service provider&nbsp;&nbsp;&nbsp;</p>
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
                <div className="button-container">
                  <Button
                    variant={selectedOption === 'postpaid' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => handleOptionChange('postpaid')}
                  >
                    Postpaid
                  </Button>
                  <Button
                    variant={selectedOption === 'prepaid' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => handleOptionChange('prepaid')}
                  >
                    Prepaid
                  </Button>
                </div>
            </div>
          </div>
        </FormControl>
        <br/><br/>
        <div>
          <div className='results-container'>
            <div className="plan-container">
              {selectedOption === 'postpaid' && (
                <>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                </>
              )}

              {selectedOption === 'prepaid' && (
                <>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs. 509</li>
                        <li className="li-2">6 GB</li>
                        <li className="li-3">1 month</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Link to = "/Components/UserPages/Recharge">
                        <Button variant = 'contained'>Recharge</Button>
                      </Link>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                    </ul>
                  </div>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plans

Recharge.jsx
import "./UserPages.css"
import UserNavbar from '../UserNavbar';

const Recharge = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const upiDetails = document.getElementById('upiDetails');
    const cardDetails = document.getElementById('cardDetails');
    const cardExpiryDetails = document.getElementById('cardExpiryDetails');
    const cardCvvDetails = document.getElementById('cardCvvDetails');

    const paymentMethodRadio = document.querySelector('.payment-method');

    paymentMethodRadio.addEventListener('change', function () {
      const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

      if (selectedMethod === 'upi') {
        upiDetails.style.display = 'block';
        cardDetails.style.display = 'none';
        cardExpiryDetails.style.display = 'none';
        cardCvvDetails.style.display = 'none';
      } else {
        upiDetails.style.display = 'none';
        cardDetails.style.display = 'block';
        cardExpiryDetails.style.display = 'block';
        cardCvvDetails.style.display = 'block';
      }
    });
  });
  return (
    <>
      <UserNavbar/>
      <div className="recharge-body">
      <br/>
        <div className="container">
          <div className="header">
            <h2>Recharge Page</h2>
          </div>

          <div className="plan-details">
            {/* <h2>Selected Plan Details</h2> */}
            <br/>
            <p style = {{color:"#333"}}>Plan: Rs. 509</p>
            <p style = {{color:"#333"}}>Data: 6 GB</p>
            <p style = {{color:"#333"}}>Validity: 1 month</p>
            <p style = {{color:"#333"}}>Additional benefits: Get Rs.100 Cashback on FastTag</p>
          </div>

          <div className="payment-form">
            <h2 style = {{color:"#333"}}>Payment Information</h2>

            <div className="form-group payment-method">
              <label>Select Payment Method:</label>
              <div className="recharge-radio">
              <label htmlFor="upi">UPI</label>
              <input className="radio-1" type="radio" id="upi" name="paymentMethod" value="upi" defaultChecked/>
              </div>
              <div className="recharge-radio">
              <label  htmlFor="card">Card</label>
              <input className="radio-2" type="radio" id="card" name="paymentMethod" value="card"/>
              </div>
            </div>

            <div className="form-group" id="upiDetails">
              <label htmlFor="upiId">UPI ID:</label>
              <input type="text" id="upiId" name="upiId" placeholder="Enter UPI ID" required/>
            </div>

            <div className="form-group" id="cardDetails" style={{display: "none"}}>
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" required/>
            </div>

            <div className="form-group" id="cardExpiryDetails" style={{display: "none"}}>
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" required/>
            </div>

            <div className="form-group" id="cardCvvDetails" style={{display: "none"}}>
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required/>
            </div>

            <div className="recharge-btn">
              <button type="submit">Recharge Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recharge

On the plans page,When i click on the recharge button in a particular plan,I want that plan's details to be displayed on the recharge page.I'll provide my code of plans page and recharge page seperately.Modify it so that it meets the requirements