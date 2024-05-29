import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: rgba(51, 51, 51, .7);
  padding: 20px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  max-width: 800px;
  color: white;
  margin-bottom: 200px;
  margin-top: 50px;
  text-align: center;
`;

export const ShowCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const FormContainer = styled.div`
  background-color: rgba(51, 51, 51, .7);
  padding: 20px;
  margin: 20px 0;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 25px;
  border: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 25px;
  background-color: #333;
  color: white;
  border: none;
  &:hover {
    background-color: #555;
  }
`;