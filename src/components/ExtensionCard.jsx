export default function ExtensionCard({ logo, name, description, isActive, onRemove, onToggle }){

    return (
        <div className="m-2 bg-[#1F2535] py-5 px-8 rounded-[20px] border-[1px] border-white/20">
            <div className="flex items-center">
                <img src={logo} alt="" />
                <div className="pl-4">
                    <p className="text-[19px] font-[600]">{name}</p>
                    <p className="text-[15px] opacity-85">{description}</p>   
                </div>
            </div>
            <div className="flex justify-between pt-10 items-center">
                <button onClick={onRemove} className="border-[1px] py-2 px-4 border-white/20 rounded-[22px] cursor-pointer">Remove</button>
                <div className={`${isActive ? "bg-[#F05D55]" : "bg-[#525868]"} w-[45px] h-[27px] rounded-[20px] items-center flex duration-500`}>
                    <button className={`bg-[#FDFCFC] w-[19px] h-[19px] rounded-[19px] mx-[0.2rem] duration-300 cursor-pointer ${isActive ? "translate-x-5" : "translate-x-0"}`}
                     onClick={onToggle}></button>
                </div>
            </div>
        </div>
    )
}