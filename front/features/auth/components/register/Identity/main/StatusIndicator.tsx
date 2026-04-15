import LockIcon from "@/shared/icons/LockIcon"



export default function StatusIndicator() {
    return (
        <div className="w-full max-w-[198px] min-h-[24px] h-auto flex items-center gap-[15px]">
            <LockIcon />
            <span className="text-sm font-bold text-[#0058BD]">End-to-End Encrypted</span>
        </div>
    )
}