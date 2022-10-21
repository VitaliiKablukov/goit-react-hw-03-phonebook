import styled from 'styled-components';
export const Form = styled.form`
  border: 1px solid;
  border-radius: 4px;
  border-color: #000;
  padding: 15px;
  text-align: center;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;
export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(10, 10, 10, 1);
  :hover {
    background-color: green;
    scale: 1.2;
  }
`;
