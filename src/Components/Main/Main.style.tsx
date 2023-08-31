import styled from "styled-components";

interface PropMain {
  mobile: boolean | string | null;
}

export const Mainstyled = styled.main<PropMain>`
  display: grid;
  justify-content: center;
  grid-template-rows: 50px 1fr;
  align-items: start;
  width: 100%;
  padding: 30px;
  min-height: 650px;
  height: 100%;

  font-family: "Anek Malayalam", sans-serif;

  input::placeholder {
    color: #c1c0c0;
  }

  select {
    display: flex;
    border: none;
    padding: 10px;
    width: ${({ mobile }) => (mobile ? "150px" : "300px")};
    border: solid 2px transparent;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: 0.5s;
    background: #555;
    opacity: 0.99;
    color: #c1c0c0;

    &:focus {
      border: solid 2px #0480bd;
    }

    option {
      padding: 10px;
     
      
    }
  }

  input {
    border: none;
    padding: 10px;
    width: ${({ mobile }) => (mobile ? "150px" : "300px")};
    border: solid 2px transparent;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: 0.5s;
    background: #555;
    opacity: 0.99;

    &:focus {
      border: solid 2px #0480bd;
    }
  }
`;

export const DivRowPageStyled = styled.div<PropMain>`
  padding: 10px;
  display: flex;
  justify-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
  width: 100%;
  align-items: center;
  gap: 10px;
  background: #161415;
  color: #c1c0c0;

  nav {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px;
  }

  div {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid #c1c0c0;

    span {
      cursor: pointer;
    }
  }
  div:nth-child(1) {
    &:hover {
      border-bottom: 1px solid #0480bd;
    }
    span:nth-child(1) {
      font-size: 1.2rem;
    }
  }

  div:nth-child(2) {
    gap: 30px;
    border-bottom: solid 1px transparent;

    span:hover {
      color: #0480bd;
    }
  }
`;
