import Image from "next/image"


export default function StatusIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/status.svg"
                alt="status-icon" 
                width={15} 
                height={19} 
            />
        </div>
    )
}