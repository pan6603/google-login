import Image from "next/image"


export default function HeroIcon() {
    return (
        <div className="w-full max-w-[160px] min-h-[160px] h-auto bg-[#FFFFFF] rounded-full flex items-center justify-center">
            <div className="w-full max-w-[96px] min-h-[116px] h-auto bg-[#FFFFFF] rounded-full border-[1px] border-solid border-[#006E2C] flex items-center justify-center">
                <Image src="../../images/icons/hero.svg" alt="hero-icon" width={64} height={80} />
            </div>
        </div>
    )
}