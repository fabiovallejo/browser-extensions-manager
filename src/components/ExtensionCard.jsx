
export default function ExtensionCard({ logo, name, description, isActive }){
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
                <div className="border-[1px] py-2 px-4 border-white/20 rounded-[22px]">
                    <button>Remove</button>
                </div>
                <div>
                    <button onClick={isActive}>ON/OFF</button>
                </div>
            </div>
        </div>
    )
}