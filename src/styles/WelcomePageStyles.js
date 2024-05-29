import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(51, 51, 51, .7);
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  max-height: 550px;
  height: 100%;
  width: 100%;
  display: flex;
  color: white;
`;

export const Section = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

export const LeftSection = styled(Section)`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: white;
  border-radius: 0 25px 25px 0;
`;

export const RightSection = styled(Section)`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 0 25px 25px 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
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

export const Input = styled.input`
  padding: 10px;
  margin: 10px ;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;