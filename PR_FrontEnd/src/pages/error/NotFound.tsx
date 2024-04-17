import React from "react";
import ErrorImg from "../../asset/img/404 Error.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onClick = () => {
    if (!localStorage.getItem("access_token")) {
      navigate(`/`);
    } else {
      navigate(`/dashboard/${localStorage.getItem("userId")}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh">
      <img src={ErrorImg}></img>
      <p className="text-sm text-center mb-[1.5rem]">
        요청하신 페이지를 찾을 수 없습니다 <br />
        존재하지 않는 주소이거나, <br />
        요청하신 페이지가 변경, 삭제된것 같습니다
      </p>
      <div className="flex justify-around w-[22rem]">
        <div className="flex justify-center items-center w-[10rem] h-[2rem] bg-gray4 text-white font-semibold rounded-md hover:cursor-pointer" onClick={goBack}>
          이전 화면으로 돌아가기
        </div>
        <div className="flex justify-center items-center w-[10rem] h-[2rem] bg-gray4 text-white font-semibold rounded-md hover:cursor-pointer" onClick={onClick}>
          메인 화면으로 돌아가기
        </div>
      </div>
    </div>
  );
};

export default NotFound;
