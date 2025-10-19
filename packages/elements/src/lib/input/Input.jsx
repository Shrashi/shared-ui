
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:focus { border-color: #111827; box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.1); }
`;

export function Input(props) {
  return <StyledInput {...props} />;
}
