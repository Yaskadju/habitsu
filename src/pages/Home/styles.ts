import styled from "styled-components"

export const HomeContainer = styled.main`
  grid-row: 2;
  grid-column: 2;

  padding: 2.5rem;
  background: ${props => props.theme["gray-800"]};
  /* background: blue; */
`
export const ButtonInput = styled.button`
  background: ${props => props.theme["green-300"]};
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 1rem;
`
