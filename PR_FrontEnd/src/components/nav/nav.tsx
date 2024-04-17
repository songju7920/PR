import React, { SetStateAction, useState } from "react";
import PR_logo from "../../asset/img/PR_logo.svg";
import dashboard from "../../asset/img/dashboard.svg";
import dashboardActive from "../../asset/img/dashboardActive.svg";
import projects from "../../asset/img/projects.svg";
import projectsActive from "../../asset/img/projectActive.svg";
import chattings from "../../asset/img/chatting.svg";
import chattingsActive from "../../asset/img/chattingActive.svg";
import request from "../../asset/img/request.svg";
import requestActive from "../../asset/img/requestActive.svg";
import myProjects from "../../asset/img/myprojects.svg";
import myProjectActive from "../../asset/img/myProjectActive.svg";
import NavBtn from "./navBtn.tsx";
import { useNavigate } from "react-router-dom";

interface props {
  curruntPage: String;
}

const Nav = (props: props) => {
  const { curruntPage } = props;
  const navigate = useNavigate();

  const onClick = (pageName) => {
    console.log(pageName);
    if (pageName === "dashboard") {
      navigate(`/${pageName}/${localStorage.getItem("userId")}`);
    } else {
      navigate(`/${pageName}`);
    }
  };

  return (
    <div className="flex flex-col items-center pt-[2rem] w-[17.5rem] max-h-dvh bg-gray1">
      <img src={PR_logo} width={"140px"} />
      <NavBtn curruntPage={curruntPage} name={"dashboard"} ActiveImg={dashboardActive} DisabledImg={dashboard} ClickEvent={onClick} />
      <NavBtn curruntPage={curruntPage} name={"projects"} ActiveImg={projectsActive} DisabledImg={projects} ClickEvent={onClick} />
      <NavBtn curruntPage={curruntPage} name={"chattings"} ActiveImg={chattingsActive} DisabledImg={chattings} ClickEvent={onClick} />
      <NavBtn curruntPage={curruntPage} name={"requests"} ActiveImg={requestActive} DisabledImg={request} ClickEvent={onClick} />
      <NavBtn curruntPage={curruntPage} name={"my-projects"} ActiveImg={myProjectActive} DisabledImg={myProjects} ClickEvent={onClick} />
    </div>
  );
};

export default Nav;
