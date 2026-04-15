import Image from "next/image"



export default function LockIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/lock.svg" 
                alt="lock-icon" 
                width={15} 
                height={20} 
            />
        </div>
    )
}