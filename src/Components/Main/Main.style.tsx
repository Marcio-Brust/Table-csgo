import styled from "styled-components";

export const Mainstyled = styled.main`
  background: #f1f1f1;
  display: grid;
  justify-content: center;
  padding: 30px;
  font-family: "Anek Malayalam", sans-serif;
  height: 100%;

  input {
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 300px;
    border: solid 2px transparent;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: 0.5s;

    &:focus {
      border: solid 2px #0480bd;
    }

    &:hover {
      border: solid 2px #0480bd;
    }
  }
`;
