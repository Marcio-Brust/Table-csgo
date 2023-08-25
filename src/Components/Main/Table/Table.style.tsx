import styled from "styled-components";

interface TableProps {
  index: number;
}

export const TableStyled = styled.table`
  padding: 30px;
  border-collapse: collapse;
  letter-spacing: 0.07rem;
  color: #c1c0c0;
  margin-top: 30px;

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

  &:hover {
    background: #3f626d;
  }
`;

export const DivModal = styled.div`
  width: 100%;
  height: 300px;
  letter-spacing: 0.07rem;
  color: #c1c0c0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 2rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    font-weight: 800;
    padding: 5px;
  }
  span {
    font-weight: 200;
  }
  img {
    width: 100px;
  }

  div {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DivModalRating = styled.div`
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
