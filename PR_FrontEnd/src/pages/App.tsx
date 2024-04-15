import React, { useState } from "react";
import logoImg from "../asset/img/PR_logo.svg";
import notSeeImg from "../asset/img/notSeeImg.svg";
import seeImg from "../asset/img/seeImg.svg";
import axios from "axios";

function App() {
  const [loginData, setLoginData] = useState({ ID: "", PW: "" });
  const [hidePW, setHidePW] = useState("password");

  const onClick = () => {
    axios
      .post("http://localhost:8080/user/login", {
        username: loginData.ID,
        password: loginData.PW
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.accessToken);
      })
      .catch((err) => {
        const { data } = err.response;
        if (data.statusCode === 404) {
          alert(data.message);
        }
      });
  };

  const changeHidePW = () => {
    if (hidePW === "password") {
      setHidePW("text");
    } else {
      setHidePW("password");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prvData) => ({
      ...prvData,
      [name]: value
    }));
  };

  return (
    <div className="flex w-full h-dvh">
      <div className="flex flex-col bg-gray1 w-5/12 h-full justify-center items-center">
        <img src={logoImg} alt="PR 로고"></img>
        <div className="text-30px">언제, 어디서나 팀원을 찾아보세요.</div>
      </div>

      <div className="flex flex-col justify-center items-center w-6/12 h-full">
        <p className="font-black text-7xl mb-8">Login</p>
        <input
          type="text"
          placeholder="ID or Email"
          maxLength={20}
          name="ID"
          onChange={onChange}
          className="border-solid w-[19rem] px-5 py-3 rounded-xl outline-none mb-3 shadow-[2px_3px_4px_#dadada]"
        ></input>
        <div className="relative">
          <input
            placeholder="password"
            maxLength={20}
            name="PW"
            type={hidePW}
            onChange={onChange}
            className="border-solid w-[19rem] px-5 py-2 rounded-xl outline-none mb-5 shadow-[2px_3px_4px_#dadada]"
          ></input>
          <img src={hidePW === "password" ? notSeeImg : seeImg} onClick={changeHidePW} className="absolute left-[16.8rem] bottom-[1.7rem]"></img>
        </div>
        <button onClick={onClick} className="font-bold text-xl w-[19.4rem] h-10 text-white bg-black rounded-xl mb-3">
          Login
        </button>
        <div className="flex text-sm font-medium">
          <p className="mr-1">계정이 없으신가요?</p>
          <a href="google.com" className="text-purple-900 font-black">
            회원가입 하러 가기
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
