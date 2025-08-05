import Logo from "../assets/logo.svg?react";

export default function Navbar({ onTheme, darkTheme }) {
    return (
        <nav className={` ${darkTheme === true ? "bg-[#1F2535] text-white" : "bg-[#FCFDFF]"} mb-20 p-5 flex rounded-[25px] justify-between items-center`}>
            <Logo className="w-35 md:w-50" />
            <button className={`${darkTheme === true ? "bg-[#2F354B]" : "bg-[#EEEEEE]" }  p-4 rounded-[15px] cursor-pointer`} onClick={onTheme}>
                <img src={` ${darkTheme === true ? "../../public/images/sun.svg" : "../../public/images/icon-moon.svg" }`} alt="" />
            </button>
        </nav>
    );
}