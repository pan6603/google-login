import Image from "next/image"


type LockIconProps = {
    className?: string
    imageSrc?: string
}


export default function LockIcon({ className, imageSrc }: LockIconProps ) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc || "../../images/icons/lock-blue.svg"} 
                alt="lock-icon" 
                width={15} 
                height={20} 
            />
        </div>
    )
}