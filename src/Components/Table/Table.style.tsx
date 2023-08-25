import styled from "styled-components";

interface TableProps {
  index: number;
}

export const TableStyled = styled.table`
  padding: 30px;
  border-collapse: collapse;
  font-family: "Kanit", sans-serif;
  letter-spacing: 0.07rem;
  color: #f1f1f1;

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
      font-weight: 400;
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
  background: ${({ index }) =>
    index % 2 === 0
      ? "linear-gradient(120deg, #00adee, #000 )"
      : "linear-gradient(120deg, #000, #00adee 10%)"};

  &:hover {
    background: #07032a;
  }
`;

export const DivModal = styled.div`
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
  width: 300px;
  letter-spacing: 0.07rem;
  color: #f1f1f1;

  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 0.95rem;
    font-weight: 500;
  }

  div {
    display: grid;

    img {
      width: 20px;
    }
  }
`;

export const DivModalRating = styled.div`
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
  letter-spacing: 0.07rem;
  color: #f1f1f1;
  padding: 20px;
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
