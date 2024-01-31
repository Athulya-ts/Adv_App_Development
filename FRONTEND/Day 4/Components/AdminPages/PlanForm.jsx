import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
    border: none;
    margin-right: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const PlanForm = () => {
  const [provider, setProvider] = useState('');
  const [dataAmount, setDataAmount] = useState('');
  const [rate, setRate] = useState('');
  const [validity, setValidity] = useState('');
  const [planType, setPlanType] = useState('prepaid'); // Default to prepaid

  const handleGetPlan = () => {
    // Implement logic to add a new plan
  };

  const handleAddPlan = () => {
    // Implement logic to add a new plan
  };

  const handleUpdatePlan = () => {
    // Implement logic to update an existing plan
  };

  const handleDeletePlan = () => {
    // Implement logic to delete a plan
  };

  return (
    <StyledForm>
      <h2>Add or Update Plans</h2>
      <input
        type="text"
        placeholder="Service Provider"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      />
      <input
        type="text"
        placeholder="Data"
        value={dataAmount}
        onChange={(e) => setDataAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Validity"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <label>
        Plan Type:
        <input
          type="radio"
          name="planType"
          value="prepaid"
          checked={planType === 'prepaid'}
          onChange={() => setPlanType('prepaid')}
        />
        Prepaid
      </label>
      <label>
        <input
          type="radio"
          name="planType"
          value="postpaid"
          checked={planType === 'postpaid'}
          onChange={() => setPlanType('postpaid')}
        />
        Postpaid
      </label>
      <button onClick={handleGetPlan}>View Plans</button>
      <button onClick={handleAddPlan}>Add Plan</button>
      <button onClick={handleUpdatePlan}>Update Plan</button>
      <button onClick={handleDeletePlan}>Delete Plan</button>
    </StyledForm>
  );
};

export default PlanForm;
