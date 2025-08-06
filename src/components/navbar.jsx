import Logo from "../assets/logo.svg?react";

export default function Navbar({ onTheme, darkTheme }) {
    return (
        <nav className={` ${darkTheme === true ? "bg-[#1F2535] text-white" : "bg-[#FCFDFF]"} mb-9 md:mb-20 p-3 md:p-5 flex rounded-[25px] justify-between items-center`}>
            <Logo className="w-35 md:w-50" />
            <button className={`${darkTheme === true ? "bg-[#2F354B] focus:bg-[#525868] focus:outline-offset-2 focus:border-[#040A1C] focus:outline-[#D4686C] focus:outline-2 hover:bg-[#525868]" : "bg-[#EEEEEE] focus:outline-offset-2 focus:border-[#ECF4FB] focus:outline-[#CA241B] focus:outline-2 hover:bg-[#C6C6C5]" } duration-200 transition-all p-4 rounded-[15px] cursor-pointer`} onClick={onTheme}>
                <img src={` ${darkTheme === true ? "../../public/images/sun.svg" : "../../public/images/icon-moon.svg" }`} alt="" />
            </button>
        </nav>
    );
}