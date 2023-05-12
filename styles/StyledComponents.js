import styled from "@emotion/styled";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1em;
  margin: 1em;
  text-align: center;
  width: calc((100% - 2em) / 5); // 5 cards per row, 1em margin on both sides
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;

export const Details = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
  padding: 0 50px;
`;
