import Image from "next/image"


export default function StatusBadgeIcon() {
    return (
        <div className="w-full max-w-[14px] min-h-[14px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/status-badge.svg"
                alt="status-icon" 
                width={12} 
                height={11} 
            />
        </div>
    )
}