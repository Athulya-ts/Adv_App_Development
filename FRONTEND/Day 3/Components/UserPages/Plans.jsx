import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './UserPages.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import UserNavbar from '../UserNavbar';

const Plans = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('postpaid');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleRecharge = (plan) => {
    setSelectedPlan(plan);
  };

  // Sample data for postpaid plans
  const postpaidPlans = [
    {
      id: 1,
      amount: 19,
      data: '2 GB',
      validity: '1 month',
      benefits: 'Get Rs.100 Cashback on FastTag'
    },
    {
      id: 2,
      amount: 59,
      data: '3 GB',
      validity: '1 month',
      benefits: 'Get Rs.100 Cashback on FastTag'
    },
    {
      id: 3,
      amount: 69,
      data: '4 GB',
      validity: '1 month',
      benefits: 'Get Rs.100 Cashback on FastTag'
    },
    // Add more plans as needed
  ];

  // Sample data for prepaid plans
  const prepaidPlans = [
    {
      id: 1,
      amount: 249,
      data: '2 GB/day',
      validity: '28 days',
      benefits: 'Get 10% discount on next recharge'
    },
    {
      id: 2,
      amount: 549,
      data: '3 GB/day',
      validity: '28 days',
      benefits: 'Get 10% discount on next recharge'
    },
    {
      id: 3,
      amount: 649,
      data: '4 GB/day',
      validity: '28 days',
      benefits: 'Get 10% discount on next recharge'
    },
    // Add more plans as needed
  ];

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
                    {postpaidPlans.map((plan) => (
                      <div key={plan.id} className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs.{plan.amount}</li>
                        <li className="li-2">{plan.data}</li>
                        <li className="li-3">{plan.validity}</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>

                    <Button
                      variant='contained'
                      onClick={() => {
                        navigate("/Components/UserPages/Recharge", {
                          state: { selectedPlan: plan }
                        });
                      }}
                    >
                      Recharge
                    </Button>

                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>{plan.benefits}</li>
                      {/* <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li> */}
                    </ul>
                  </div>
                </div>
                    ))}
                </>
              )}

              {selectedOption === 'prepaid' && (
                <>
{prepaidPlans.map((plan) => (
                      <div key={plan.id} className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Rs.{plan.amount}</li>
                        <li className="li-2">{plan.data}</li>
                        <li className="li-3">{plan.validity}</li>
                      </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1">Unlimited local STD & Roaming Calls</li>
                        <li className="li-2">data</li>
                        <li className="li-3">validity</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Button
                        variant='contained'
                        onClick={() => {
                          navigate("/Components/UserPages/Recharge", {
                            state: { selectedPlan: plan }
                          });
                        }}
                      >
                        Recharge
                      </Button>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>{plan.benefits}</li>
                      {/* <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Get Rs.100 Cashback on FastTag</li>
                      <li>Apollo 24|7 Cashback</li>
                      <li>Get Rs.100 Cashback on FastTag</li> */}
                    </ul>
                  </div>
                 </div>
))}
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

