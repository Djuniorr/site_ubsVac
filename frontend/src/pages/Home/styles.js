import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 30px;
  background-color: #f5f5f9;
`;

export const Menu = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-shadow: 0 1px 2px #0003;
  background-color: #f0f0f0;
  max-width: 400px;
  padding: 20px;
  border-radius: 2px;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 100px;
  overflow-y: auto;
`;

export const Title = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2B2B2E;
  padding: 10px;
`;

export const Subtitle = styled.label`
  font-size: 26px;
  font-weight: 700;
  color: #2B2B2E;
  padding-bottom: 40px;
  text-align: left;
  display: block;
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: #2B2B2E;
  line-height: 1.6;
  margin-bottom: 80px;
`;