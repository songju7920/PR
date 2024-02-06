import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

export const UpperMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  background-color: #e3e8ee;
  padding: 0px;
`;

export const LowerMenu = styled.div`
  height: 8vh;
  background-color: #f8f7f5;
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin: 40px 20px 10px 0px;
  width: 120px;
  height: 120px;
  background-size: 120px;
`;

export const MenuListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const MenuContainer = styled.div<{ isActive: boolean }>`
  padding-left: 40px;
  width: 210px;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "#DBE0E9" : "none")};
`;

export const MenuName = styled.p<{ isActive: boolean }>`
  font-size: 20px;
  font-weight: 500;
  width: 95px;
  color: ${({ isActive }) => (isActive ? "black" : "#817e7e")};
  margin-left: 15px;
`;

export const SelectIcon = styled.div`
  height: 50px;
  width: 10px;
  background-color: #4e5686;
  margin-left: 60px;
  border-radius: 0px 6px 6px 0px;
  z-index: 999;
`;
