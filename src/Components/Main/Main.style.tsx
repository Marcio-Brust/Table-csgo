import styled from "styled-components";

export const Mainstyled = styled.main`
  display: grid;
  justify-content: center;
  grid-template-rows: 50px 1fr;
  align-items: start;
  width: 100%;
  padding: 30px;
  min-height: 650px;
  font-family: "Anek Malayalam", sans-serif;

  input::placeholder {
    color: #222;
  }

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
    background: #999;

    &:focus {
      border: solid 2px #0480bd;
    }

    &:hover {
      border: solid 2px #0480bd;
    }
  }
`;
