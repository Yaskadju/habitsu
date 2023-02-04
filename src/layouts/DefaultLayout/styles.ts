import styled from "styled-components"

export const LayoutContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 20rem auto;
  grid-template-rows: 5rem auto;

  background: ${props => props.theme["gray-800"]};
`
