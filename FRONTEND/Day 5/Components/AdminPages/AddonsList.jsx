import AddOnCards from '../UserPages/AddOnCards'
import styled from 'styled-components';

const StyledList = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddonsList = () => (
  <StyledList>
    {/* Display add-ons here */}
    <AddOnCards/>
  </StyledList>
);

export default AddonsList;


