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