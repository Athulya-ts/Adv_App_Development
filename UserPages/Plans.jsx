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

