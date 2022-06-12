import styled from "styled-components"
export const Container = styled.div`

`;
export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  @media only screen and (max-width: 1050px) {
    width: 100%;
    table {
      width: 1000px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
  td,
  th {
    padding: 10px;
  }
`;

export const THead = styled.thead`
  width: 100%;
  tr {
    background-color: lightgray;
    th {
      color: white;
      padding: 20px 10px;
      &:last-child {
        border-top-right-radius: 10px;
      }
      &:first-child {
        border-top-left-radius: 10px;
      }
    }
  }
`;
export const TBody = styled.tbody`
  width: 100%;
  tr {
    border-left: 1px solid black;
    transition-duration: 0.5s;
    &:hover {
      background-color: lightgrey;
    }
  }
`;


export const TFoot = styled.tfoot`
  width: 100%;
  tr {
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
  font-weight: bold;
`;

export const TRow = styled.tr`
  width: 100%;
  background-color:#fff;
  position: relative;
  &:hover {
    .cursor-order {
      display: flex;
    }
  }
`;

export const TD = styled.td`
  /* border-top: 1px solid black; */
  //width: 20px;
  border-bottom: 1px solid black;
  padding: 15px;
  text-align: center;
`;

export const TH = styled.th``;