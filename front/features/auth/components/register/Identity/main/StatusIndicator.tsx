import LockIcon from "@/shared/icons/LockIcon"



export default function StatusIndicator() {
    return (
        <div className="w-full max-w-[198px] min-h-[24px] h-auto flex items-center gap-[15px]">
            <LockIcon 
                className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center"
                imageSrc="../../images/icons/lock-blue.svg"
            />
            <span className="text-sm font-bold text-[#0058BD]">End-to-End Encrypted</span>
        </div>
    )
}