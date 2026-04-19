import Image from "next/image"


export default function MoblieIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/moblie.svg"
                alt="mobile-icon"
                width={14} 
                height={21} 
            />
        </div>
    )
}