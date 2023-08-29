import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #161415;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  button {
    display: none;
  }

  nav {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    transition: 0.5s;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 24px;
        margin-right: 5px;
      }
    }
    a {
      display: flex;
      padding: 20px 30px;
      color: #c1c0c0;
      font-weight: 700;
      transition: 0.5s;

      &:hover::after {
        content: "";
        position: absolute;
        display: block;
        margin-left: -15px;
        margin-top: 7px;
        width: 8px;
        height: 8px;
        background: #0480bd;
      }
    }
  }

  img {
    width: 100px;
  }
`;
