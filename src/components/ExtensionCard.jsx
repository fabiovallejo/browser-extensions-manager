export default function ExtensionCard({ logo, name, description, isActive, onRemove, onToggle, darkTheme}){

    const focusClassesButton = darkTheme ? "focus:outline-offset-2 focus:border-[#040A1C] focus:outline-[#D4686C] focus:outline-2" : "focus:outline-offset-2 focus:border-[#ECF4FB] focus:outline-[#CA241B] focus:outline-2";

    return (
        <div className={`m-2 ${darkTheme === true ? "bg-[#1F2535] border-white/20" : "bg-[#FCFDFF] border-black/20" } py-5 px-6 md:px-8 rounded-[20px] border-[1px] `}>
            <div className="flex items-center">
                <img src={logo} alt="" />
                <div className="pl-4">
                    <p className="text-[16px] lg:text-[19px] font-[600]">{name}</p>
                    <p className="text-[13px] lg:text-[15px] opacity-85">{description}</p>   
                </div>
            </div>
            <div className="flex justify-between pt-7 md:pt-10 items-center">
                <button onClick={onRemove} className={`border-[1px] py-2 px-4
                ${darkTheme 
                ? "border-white/20 focus:bg-[#52576A] focus:outline-offset-1 focus:border-[#040A1C] focus:outline-[#D4686C] focus:outline-2 focus:text-white hover:bg-[#F65A56] hover:text-[#0C1645]" 
                : "border-black/20 focus:bg-[#EEEEF0] focus:outline-offset-1 focus:border-[#ECF4FB] focus:outline-[#CA241B] focus:outline-2 hover:bg-[#C8221A] hover:text-white" }
                rounded-[22px] cursor-pointer font-[500] duration-200 transition-all`}>Remove</button>
                <button onClick={onToggle} className={`w-[45px] h-[27px] rounded-[20px] items-center flex cursor-pointer transition-all ${focusClassesButton}
                    ${darkTheme === true 
                        ? isActive 
                            ? "bg-[#F05D55] hover:bg-[#DE4B42]" 
                            : "bg-[#525868] hover:bg-[#52576A]"
                        : isActive
                            ? "bg-[#CA241B] hover:bg-[#DC4A3D]" 
                            : "bg-[#C5C5C5]"
                    }`}>
                    <div className={`bg-[#FDFCFC] w-[19px] h-[19px] rounded-[19px] mx-[0.2rem] duration-200 transition-all ${isActive ? "translate-x-5" : "translate-x-0"}`}></div>
                </button>
            </div>
        </div>
    )
}