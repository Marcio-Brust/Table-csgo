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
