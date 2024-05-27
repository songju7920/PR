import React, { useState } from "react";
import Nav from "../../components/common/nav/nav.tsx";
import Header from "../../components/common/header/header.tsx";
import Footer from "../../components/common/footer/footer.tsx";
import DropdownImg from "../../asset/img/dropdown_closed.svg";
import { ProjectList } from "../../test/projectList.js";
import ProjectBox from "../../components/projects/projectBox.tsx";
import Pagenation from "../../components/projects/pagination.tsx";

const Projects = () => {
  const [orderBy, setOrderBy] = useState("최신순");
  const [page, setPage] = useState(1);

  const projectList = ProjectList;

  const [minPage, maxPage] = [1, Math.ceil(projectList.length / 15)];
  const pagenationRage = [-2, -1, 0, 1, 2];

  const onClick = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className="flex w-full h-dvh">
      <Nav curruntPage={"projects"} />
      <div className="flex  flex-col w-full h-full">
        <Header />
        <div className="w-full h-[70rem] px-[5rem] pt-[5rem] pb-[3rem] bg-backGroundColor overflow-auto">
          <p className="font-bold text-2xl">Projects</p>
          <div className="flex justify-between items-center mt-[2rem] w-full">
            <div>
              <p className="font-bold text-lg">{projectList.length}개의 프로젝트가 검색되었습니다</p>
              <p>원하시는 프로젝트를 찾아보세요!</p>
            </div>
            <div className="flex items-center justify-around p-[1rem] bg-EAEBEE w-[7rem] h-[3rem] rounded-xl">
              {orderBy}
              <img src={DropdownImg} width={13} />
            </div>
          </div>
          <div className="flex mt-[1.5rem] w-full h-[42rem] flex-wrap">
            {projectList.slice((page - 1) * 15, page * 15).map(({ img, title, writer, post_ID }) => (
              <ProjectBox img={img} projectName={title} author={writer} postId={post_ID} />
            ))}
          </div>
          <div className="flex justify-center w-full mt-[1.5rem]">
            <div className="flex justify-evenly w-[30rem]">
              {pagenationRage.map((diff) => {
                const showingPage = page + diff;
                return <Pagenation num={showingPage} active={diff == 0} hidden={minPage > showingPage || maxPage < showingPage} event={onClick} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
