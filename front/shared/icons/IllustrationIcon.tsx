import Image from "next/image"

export default function IllustrationIcon() {
    return (
        <div className="w-full max-w-[64px] min-h-[96px] h-auto flex items-start justify-center">
            <div className="w-full max-w-[64px] min-h-[64px] h-auto bg-[#F1F4FA] rounded-full flex items-center justify-center">
                <Image 
                    src="../../images/icons/illustration.svg" 
                    alt="illustration-icon" 
                    width={20}
                    height={27} 
                />
            </div>
        </div>
    )
}