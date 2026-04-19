import Image from "next/image"



export default function ChevronDownIcon() {
    return (
        <div className="w-full max-w-[14px] min-h-[20px] h-auto flex justify-center items-center">
            <Image 
                src="../../images/icons/chevron-down.svg" 
                alt="chevron-down-icon" 
                width={8} 
                height={10} 
            />
        </div>
    )
}