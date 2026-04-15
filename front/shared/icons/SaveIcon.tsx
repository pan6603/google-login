import Image from "next/image"



export default function SaveIcon() {
    return (
        <div className="w-full max-w-[14px] min-h-[20px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/auth/save.svg"
                alt="save-icon" 
                width={10} 
                height={10} 
            />
        </div>
    )
}