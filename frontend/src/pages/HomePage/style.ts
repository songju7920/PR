import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  height: 74vh;
  width: 75%;
  padding: 5vh 9.5vh;
  background-color: #f9f9f9;
`;

export const Title = styled.p`
  margin-left: 10px;
  margin-bottom: 0px;
  width: 100%;
  height: 30px;
  font-size: 25px;
  font-weight: 900;
`;

export const SubTitle = styled.div`
  margin: 0px;
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
`;

export const DashboardContainers = styled.div`
  background-color: #fffcfc;
  box-shadow: 0px 0px 20px #e1e1e1;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled(DashboardContainers)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 210px;
  width: 220px;
`;

export const ProfileImg = styled.div`
  height: 115px;
  width: 115px;
  border-radius: 57.5px;
  background-size: 115px;
  background-image: URL("https://i1.sndcdn.com/artworks-nkKav7dy9Bn0oeuz-eiRVSg-t500x500.jpg");
`;

export const Username = styled.p`
  margin: 10px 0px 5px;
  font-family: "SUIT-Variable";
  font-weight: 800;
  font-size: 20px;
`;

export const Major = styled.p`
  margin: 0px;
  font-family: "SUIT-Variable";
  font-size: 13px;
  color: #817e7e;
`;

export const GithubContainer = styled(DashboardContainers)`
  height: 210px;
  width: 69.2%;
`;

export const NoGitConnectionMsg = styled.p`
  font-family: "SUIT-Variable";
  font-size: 20px;
  color: #817e7e;
  font-weight: 800;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const ConnectionBtn = styled.div`
  width: 180px;
  height: 40px;
  background-color: #d8d8d8;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-bottom: auto;
`;

export const ConnectContainer = styled(DashboardContainers)`
  height: 200px;
  width: 220px;
`;

export const ProjectContainer = styled(DashboardContainers)`
  height: 200px;
  width: 32%;
`;

export const SkillsContainer = styled(DashboardContainers)`
  height: 200px;
  width: 32%;
`;

export const BoxContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px;
  background-color: #ebeff0;
  width: 100%;
  height: 25%;
  border-radius: 10px;
`;

export const BoxText = styled.p`
  text-align: center;
  font-size: 12px;
  width: 70%;
`;
