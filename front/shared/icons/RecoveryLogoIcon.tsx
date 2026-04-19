import Image from "next/image"


export default function RecoveryLogoIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex justify-center items-center">
            <Image 
                src="../../images/logo/recovery-logo.svg" 
                alt="recovery-logo" 
                width={15} 
                height={19} 
            />
        </div>
    )
}