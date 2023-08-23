import styled from "styled-components";

export const TableStyled = styled.table`
  padding: 30px;
  border-collapse: collapse;

  thead {
    th {
      text-align: left;
      border-bottom: solid 0.1px #999;
      padding: 10px;
    }
  }
  tbody {
    tr {
      background: red;
      text-align: center;
    }
    td {
      text-align: left;
      border-bottom: solid 0.1px #999;
      padding: 10px;
    }
  }
`;
