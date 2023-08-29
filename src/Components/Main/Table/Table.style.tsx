import styled from "styled-components";

interface TableProps {
  index: number;
}

export const TableStyled = styled.table`
  border-collapse: collapse;
  letter-spacing: 0.07rem;
  color: #c1c0c0;
  width: 100%;

  img {
    width: 20px;
    object-fit: cover;
  }

  thead {
    vertical-align: middle;

    th {
      text-align: left;
      padding: 10px;
      font-size: 1rem;
      font-weight: 800;
      color: #161415;

      div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
  tbody {
    td {
      text-align: center;
      padding: 10px;
    }
  }
`;

export const TrStyled = styled.tr<TableProps>`
  background: ${({ index }) => (index % 2 === 0 ? "#161415" : "#0480bd")};
  opacity: 0.9;
  &:hover {
    background: #3f626d;
  }
`;

interface PropModal {
  mobile: boolean | string | null;
}

export const DivModal = styled.div<PropModal>`
  width: 100%;
  height: 300px;
  letter-spacing: 0.07rem;
  color: #c1c0c0;
  display: ${({ mobile }) => (mobile ? "grid" : "flex")};
  justify-content: ${({ mobile }) =>
    mobile ? "space-between" : "space-around"};
  align-items: center;
  padding: 20px;

  section {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: ${({ mobile }) => (mobile ? "0.7rem" : " 0.95rem")};
    font-weight: 800;
    padding: 5px;
  }
  span {
    font-weight: 200;
  }
  img {
    width: ${({ mobile }) => (mobile ? "75px" : "100px")};
  }

  div {
    display: grid;
    grid-template-columns: ${({ mobile }) => (mobile ? "1fr 1fr" : "1fr")};
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DivModalRating = styled.div<PropModal>`
  display: ${({ mobile }) => (mobile ? "none" : "")} !important;
  letter-spacing: 0.07rem;
  font-weight: 800;
  width: 150px;
  height: 150px;
  border: solid 20px #c1c0c0;
  border-left: solid 20px transparent;
  border-right: solid 20px transparent;
  border-radius: 100px;
  color: #c1c0c0;
  padding: 30px;
  text-align: center;

  img {
    width: 200px;
  }

  p {
    font-weight: 500;
    font-size: 2rem;
    text-decoration: underline;
  }
`;
