import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  height: 157vh;
  display: flex;
  padding-left: 15%;
  padding-top: 8vh;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  height: 143vh;
  width: 88.5%;
  padding: 5vh 9.5vh 2vh;
  background-color: #f9f9f9;
`;

export const Title = styled.p`
  margin-left: 10px;
  margin-bottom: 15px;
  width: 100%;
  height: 30px;
  font-size: 25px;
  font-weight: 900;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const TxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ProjectCntTxt = styled.p`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const ProjectSubTxt = styled.p`
  margin-left: 15px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 500;
  color: #817e7e;
`;

export const DropdownBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  border-radius: 10px;
  padding-left: 20px;
  width: 90px;
  height: 50px;
  background-color: #eaebee;
  color: #817e7e;
`;

export const SubmitBtn = styled.div`
  margin-left: 20px;
  display: flex;
  background-color: #a49f9f;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  font-weight: 800;
`;

export const ProjectListContainer = styled.div`
  height: 600px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 220px);
  grid-template-rows: repeat(4, 210px);
`;

export const PageBtnContainer = styled.div`
  margin-top: auto;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  font-weight: 600;
`;

export const PageBtn = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
`;
