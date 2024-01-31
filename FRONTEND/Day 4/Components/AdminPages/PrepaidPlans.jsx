import "./AdminPages.css"
import PlansList from './PlansList';
import PlanForm from './PlanForm';
import styled from 'styled-components';
import AdminNavbar from "../AdminNavbar";

const StyledDashboard = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const PrepaidPlans = () => {
  return (
    <>
    <AdminNavbar/>
    <StyledDashboard>
      <h1>Mobile Recharge Portal Admin</h1>
      <PlanForm />
      <PlansList />
    </StyledDashboard>
  </>
  )
}

export default PrepaidPlans
