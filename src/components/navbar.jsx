import Logo from "../assets/logo.svg?react";

export default function Navbar() {
    return (
        <nav className="text-white bg-[#1F2535] mx-45 mb-20 p-5 flex rounded-[25px] justify-between items-center">
            <Logo className="w-50" />
            <div className="bg-[#2F354B] p-4 rounded-[15px]">
                <img src="../../public/images/sun.svg" alt="" />
            </div>
        </nav>
    );
}