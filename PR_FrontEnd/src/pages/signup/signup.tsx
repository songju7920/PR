import React, { useState } from "react";
import Logo from "../../asset/img/PR_logo.svg";
import Input from "../../components/signup/input.tsx";
import DropdownMenu from "../../components/signup/dropdownMenu.tsx";
import { signup } from "../../api/user.ts";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/signup/passwordInput.tsx";
import DropdownClosed from "../../asset/img/dropdown_closed.svg";

const Signup = () => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    skills: "",
    major: "",
    "chack password": "" || undefined
  });

  const InputData = [
    { placeHolder: "username", Maxlength: 20 },
    { placeHolder: "email", Maxlength: 50 },
    { placeHolder: "skills", Maxlength: 225 }
  ];
  const passwordPlaceHolders = ["password", "chack password"];
  const dropdownMenu = ["back_end", "front_end", "devops", "design", "full_stack", "android", "ios", "flutter", "game", "embedded", "security"];

  const onClick = () => {
    if (data.password !== data["chack password"]) {
      alert("비밀번호/비밀번호 확인이 다릅니다.");
    } else if (Object.entries(data).filter((datum) => datum[1] === "").length > 0) {
      alert("작성하지 않은 칸을 작성해주세요");
    } else if (data.skills.split(" ").length > 5) {
      alert("기술 스택은 1가지 이상, 5가지 이하로 작성해주세요");
    } else {
      delete data["chack password"];
      signup(data)
        .then((res) => {
          alert("회원가입 성공!");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeMajor = (e) => {
    setData({ ...data, major: e.target.innerText });
    setDropdownOpen(false);
  };

  return (
    <div className="w-full h-dvh flex bg-backGroundColor">
      <div className="w-1/2 h-dvh flex flex-col justify-center items-center">
        <div className="flex items-center">
          <img src={Logo} className="w-[7rem]" />
          <p className="text-4xl font-bold">에 오신걸 환영해요!</p>
        </div>
        <p className="text-xl">PR과 함께하기 위해 위해 당신을 알려주세요!</p>
      </div>
      <div className="w-1/2 h-dvh flex flex-col justify-center items-center">
        {InputData.map((data) => (
          <Input placeHolder={data.placeHolder} maxLength={data.Maxlength} changeFunc={onChange} />
        ))}
        <div className="relative">
          <input
            value={data.major}
            placeholder="major"
            readOnly
            required
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-[30rem] h-[3.2rem] px-[1.5rem] my-[0.5rem] rounded-2xl shadow-[2px_3px_4px_#dadada] hover:cursor-pointer outline-none"
          />
          <img src={DropdownClosed} className="absolute z-20 bottom-[1.3rem] right-[1.3rem] hover:cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)} />
          {dropdownOpen && (
            <div className="absolute z-50 w-[30rem] h-[11rem] rounded-2xl shadow-[2px_3px_4px_#dadada] px-[1rem] py-[1rem] bg-white overflow-auto">
              {dropdownMenu.map((dropdown) => (
                <DropdownMenu major={dropdown} clickFunc={changeMajor} />
              ))}
            </div>
          )}
        </div>
        {passwordPlaceHolders.map((placeHolder) => (
          <PasswordInput placeHolder={placeHolder} maxLength={20} changeFunc={onChange} />
        ))}

        <button className="w-[30rem] h-[3rem] mt-[1rem] rounded-xl bg-black text-white font-bold text-xl" onClick={onClick}>
          SignUp
        </button>
        <a className="text-sm font-semibold mt-[0.5rem] hover:cursor-pointer" href="/">
          로그인 화면으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default Signup;
