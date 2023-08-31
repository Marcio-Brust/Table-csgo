import styled, { css } from "styled-components";

interface HeaderProps {
  mobile: boolean | string | null;
  isvisible: boolean | string | null;
}

export const HeaderStyled = styled.header<HeaderProps>`
  background: #161415;
  display: flex;
  align-items: center;
  height: 100px;

  nav {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    transition: 0.5s;

    button {
      display: ${({ mobile }) => (mobile ? "flex" : "none")};
      align-self: center;
      padding: 10px;
      color: #c1c0c0;
      font-weight: 700;
      background: #555;
      border: none;
      gap: 5px;
      border-radius: 4px;
      margin-right: 25px;
      cursor: pointer;
      z-index: 100;

      span {
        border-top: ${({ isvisible }) =>
          isvisible === "true" ? "transparent" : "2px solid #0480bd"};
        width: 20px;
      }
      span::after,
      span::before {
        content: "";
        display: block;
        width: 20px;
        height: 2px;
        background: #0480bd;
        margin-top: 5px;
        transition: 0.3s;
        position: relative;
      }

      span::after {
        transform: ${({ isvisible }) =>
          isvisible === "true" ? "rotate(-135deg)" : "rotate(0deg)"};
        top: ${({ isvisible }) => (isvisible === "true" ? "-7px" : "0")};
      }
      span::before {
        transform: ${({ isvisible }) =>
          isvisible === "true" ? "rotate(135deg)" : "rotate(0deg)"};
      }
    }

    ul {
      display: ${({ mobile }) => (mobile ? "none" : "flex")};
      justify-content: space-between;
      align-items: center;
      /*      cursor: no-drop; */

      ${({ isvisible }) =>
        isvisible === "true" &&
        css`
          display: block;
          position: absolute;
          margin-top: 188px;
          right: -102px;
          background: #161415;
          padding-top: 98px;
          width: 150px;
          z-index: 9;
          transition: 0.5s;
          animation: ShowRight 0.3s forwards;

          @keyframes ShowRight {
            to {
              right: 0;
            }
          }

          a {
            display: flex;
            justify-content: center;
            padding: 20px 0px;

            &:hover::after {
              content: "";
              position: absolute;
              display: block;
              margin-left: -100px;
              margin-top: 7px;
              width: 8px;
              height: 8px;
              background: #0480bd;
            }
          }
        `}

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
      font-size: 1rem;

      &:hover::after {
        content: "";
        position: absolute;
        display: block;
        margin-left: -10px;
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
