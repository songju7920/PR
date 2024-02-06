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
`;

export const LowerMenu = styled.div`
  padding-left: 25px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuContainer = styled.div`
  margin-right: 40px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #817e7e;
  margin-left: 15px;
`;
