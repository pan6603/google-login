import Image from "next/image"


export default function IdentityLogoIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[28px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/logo/identity-logo.svg"
                alt="identity-logo" 
                width={15} 
                height={19} 
            />
        </div>
    )
}