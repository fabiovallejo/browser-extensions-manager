export default function ExtensionCard({ logo, name, description, isActive, onRemove, onToggle, darkTheme}){

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
                <button onClick={onRemove} className={`border-[1px] py-2 px-4 ${darkTheme ? "border-white/20 " : "border-black/20 " }rounded-[22px] cursor-pointer`}>Remove</button>
                <div className={`w-[45px] h-[27px] rounded-[20px] items-center flex duration-300 
                    ${darkTheme 
                        ? isActive 
                            ? "bg-[#F05D55]" 
                            : "bg-[#525868]"
                        : isActive
                            ? "bg-[#CA241B]" 
                            : "bg-[#C5C5C5]"
                    }`}>
                    <button className={`bg-[#FDFCFC] w-[19px] h-[19px] rounded-[19px] mx-[0.2rem] duration-300 cursor-pointer ${isActive ? "translate-x-5" : "translate-x-0"}`}
                     onClick={onToggle}></button>
                </div>
            </div>
        </div>
    )
}