import React from "react";
import * as S from "./style.ts";

function ProjectBox({ data }) {
  const { title, writer, projectImg } = data;

  return (
    <S.Container>
      <S.ProjectImg Img={projectImg} />
      <S.ProjectName>{title}</S.ProjectName>
      <S.StarterName>By {writer}</S.StarterName>
    </S.Container>
  );
}

export default ProjectBox;
