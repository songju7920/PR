import React from "react";
import { useNavigate } from "react-router-dom";

interface prop {
  postId: number;
  img: string;
  projectName: string;
  author: string;
}

const ProjectBox = (props: prop) => {
  const { postId, img, projectName, author } = props;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/project/${postId}`);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center w-[12.9rem] h-[12.9rem] p-[1rem] mr-[1rem] mb-[1rem] bg-white shadow-[3px_3px_2px_#dadada] hover:cursor-pointer rounded-xl peer"
        onClick={onClick}
      >
        <img src={img} width={130} className="mb-[0.5rem]" />
        <p className="font-bold text-sm text-ellipsis overflow-hidden w-full whitespace-nowrap text-center">{projectName}</p>
        <p className="text-gray2 text-xs">By {author}</p>
      </div>
      <span className="text-xs p-1 absolute bottom-[2rem] left-[1.5rem] bg-black text-white rounded-md invisible peer-hover:visible opacity-60">{projectName}</span>
    </div>
  );
};

export default ProjectBox;
