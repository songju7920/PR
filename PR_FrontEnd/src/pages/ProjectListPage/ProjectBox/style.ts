import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fffcfc;
  box-shadow: 0px 0px 5px #817e7e;
  border-radius: 10px;
  margin: 10px;
`;

export const ProjectImg = styled.div<{ Img: string }>`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-size: 100px;
  background-image: URL(${({ Img }) => Img});
`;

export const ProjectName = styled.p`
  margin: 10px 0px 2px;
  color: black;
  font-size: 18px;
  font-weight: 600;
`;

export const StarterName = styled.p`
  margin: 0px;
  color: #817e7e;
  font-size: 12px;
  font-weight: 400;
`;
