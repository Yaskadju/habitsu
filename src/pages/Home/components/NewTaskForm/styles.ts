import styled from "styled-components"

export const FormContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${props => props.theme["gray-600"]};

  .error {
    color: red;
    font-size: 0.8rem;
  }
`

export const TaskLabel = styled.label`
  display: flex;
  gap: 2rem;
`

export const TaskSpan = styled.span`
  width: 8rem;
`

export const TaskInput = styled.input`
  border: 0;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 8px;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`
