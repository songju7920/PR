import React, { useEffect, useState } from "react";
import * as S from "./style.ts";
import Menu from "../../components/menu/menu.tsx";
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import ProjectBox from "./ProjectBox/projectBox.tsx";
import { postlistdata } from "../../testData/posts.js";
import { ReactComponent as DropdownIcon } from "../../assets/img/icons/dropdownIcon.svg";
import { ReactComponent as GoStartBtn } from "../../assets/img/icons/goToLeft.svg";
import { ReactComponent as GoEndBtn } from "../../assets/img/icons/goRightEnd.svg";
import { useSearchParams } from "react-router-dom";

function ProjectList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortKey = searchParams.get("sort");

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Object[]>([]);
  const maxpage = Math.ceil(postlistdata.length / 20);

  const movePage = (pageNum: number) => {
    if (pageNum > maxpage || pageNum < 1) return;

    setPage(pageNum);

    const startPage = (pageNum - 1) * 20;

    const postList: Array<Object> = [];
    for (let i = startPage; i <= Math.min(startPage + 19, postlistdata.length - 1); i++) {
      postList.push(postlistdata[i]);
    }

    console.log(postList);
    setPosts(postList);
  };

  useEffect(() => {
    movePage(page);
  }, []);

  return (
    <>
      <Menu />
      <Header />
      <S.Container>
        <S.MainContainer>
          <S.Title>Projects</S.Title>
          <S.InfoContainer>
            <S.TxtContainer>
              <S.ProjectCntTxt>{postlistdata.length}개의 프로젝트가 검색되었습니다!</S.ProjectCntTxt>
              <S.ProjectSubTxt>원하시는 프로젝트를 찾아보세요!</S.ProjectSubTxt>
            </S.TxtContainer>
            <S.DropdownBtn>
              {sortKey === "desc" ? "최신순" : "오래된순"}
              <DropdownIcon />
            </S.DropdownBtn>
            <S.SubmitBtn>적용</S.SubmitBtn>
          </S.InfoContainer>
          <S.ProjectListContainer>
            {posts.map((data) => (
              <ProjectBox data={data} />
            ))}
          </S.ProjectListContainer>
          <S.PageBtnContainer>
            <GoStartBtn onClick={() => movePage(1)} />
            <S.PageBtn onClick={() => movePage(page - 1)}>{page - 1 > 0 ? page - 1 : null}</S.PageBtn>
            <S.PageBtn onClick={() => movePage(page)}>{page}</S.PageBtn>
            <S.PageBtn onClick={() => movePage(page + 1)}>{maxpage >= page + 1 ? page + 1 : null}</S.PageBtn>
            <GoEndBtn onClick={() => movePage(maxpage)} />
          </S.PageBtnContainer>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </>
  );
}

export default ProjectList;
