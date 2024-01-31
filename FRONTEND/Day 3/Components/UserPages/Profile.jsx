import "./UserPages.css"
import UserNavbar from '../UserNavbar';

const Profile = () => {
  return (
    <>
        <UserNavbar/>
      <div className="profile-container">
        <div className="profile-header">
            <div className="profile-avatar">
                <img src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930948.jpg?size=626&ext=jpg&ga=GA1.1.949399214.1697784670&semt=sph" alt="User Avatar"/>
            </div>
            <div className="profile-details">
                <h2>Meridith Olivia Benson</h2>
                <p>Email: meredith.benson@yahoo.com</p>
                <p>Phone: +91 82294494877</p>
                <p>Sim: Reliance Jio</p>
            </div>
        </div>

        <div className="transaction-history">
            <h2>Recharge History</h2>
            
            <div className="transaction-item">
                <div className="transaction-info">
                    <h3>Recharge - $20</h3>
                    <p>Sim: Airtel</p>
                    <p>Acc Name: Natasha</p>
                    <p>Phone number: 8229487754</p>
                    <p>Date: January 1, 2024</p>
                </div>
                <p>Status: Success</p>
            </div>

            <div className="transaction-item">
                <div className="transaction-info">
                    <h3>Recharge - $15</h3>
                    <p>Sim: Jio</p>
                    <p>Acc Name: Noha</p>
                    <p>Phone number: 9952948145</p>
                    <p>Date: December 28, 2023</p>
                </div>
                <p>Status: Success</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Profile