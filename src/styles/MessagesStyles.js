import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  background-color: rgba(51, 51, 51, .7);
  padding: 20px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  max-width: 800px;
  color: white;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const MessagesContainer = styled.div`
  position: relative;
  background-color: rgba(51, 51, 51, .7);
  padding: 20px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  max-width: 800px;
  color: white;
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

export const TextArea = styled.textarea`
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

export const IndividualMessageContainer = styled.div`
  background-color: rgba(51, 51, 51, 0.7);
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  text-align: center;
`;

export const Message = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
`;