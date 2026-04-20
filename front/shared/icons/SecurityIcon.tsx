import Image from "next/image"



export default function SecurityIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/security-icon.svg"
                alt="security-icon"
                width={15}
                height={19}
            />
        </div>
    )
}