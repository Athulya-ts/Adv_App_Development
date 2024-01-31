
import styled from 'styled-components';

const StyledList = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RechargeList = () => (
  <StyledList>
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
  </StyledList>
);

export default RechargeList;
