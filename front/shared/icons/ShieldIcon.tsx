import Image from "next/image"


export default function ShieldIcon() {
    return (
        <div className="w-full max-w-[40px] min-h-[44px] h-auto bg-[#F1F4FA] rounded-lg flex items-center justify-center">
            <div className="w-full max-w-[24px] min-h-[28px] h-auto flex items-center justify-center">
                <Image 
                    src="../../images/icons/shield.svg" 
                    alt="shield-icon" 
                    width={15} 
                    height={19} 
                />
            </div>
        </div>
    )
}