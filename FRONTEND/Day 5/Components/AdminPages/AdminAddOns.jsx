import styled from 'styled-components';
import AddonsList from './AddonsList';
import AddonForm from './AddonForm';
import AdminNavbar from '../../Components/AdminNavbar'
import "./AdminPages.css"

const StyledDashboard = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;
const AdminAddOns = () => {
  return (
    <>
    <AdminNavbar/>
      <StyledDashboard>
      <h1>Mobile Recharge Portal Admin</h1>
        <AddonForm />
        <AddonsList />
      </StyledDashboard>
  </>
);
}

export default AdminAddOns

