import Card from "@mui/material/Card";
import styled from "styled-components";

export const Container = styled.div`
   {
    font-size: 13px;
    padding: 4px 8px;
    background-color: ${(props) => props.background || "red"};
    color: ${(props) => props.color || "white"};
    border-radius: 8px;
    font-weight: 700;
    font-family: roboto;
    max-width: 90px;
    align-Items:center:
  }
`;

// const StockLabel = styled(div)`
//   bgcolor: "#E3F9DD";
//   color: "#229A16";
// `;
// const OutStockLabel = styled(div)`
//   bgcolor: "#F8DADB";
//   color: "#B72136";
// `;
