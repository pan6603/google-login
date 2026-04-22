

type SecurityBadgeProps = {
    className?: string;
}



export default function SecurityBadge({ className }: SecurityBadgeProps) {
    return (
        <div className={className}>
            <span className="text-[10px] font-bold text-[#181C20]">Secure SSL Connection | 256-Bit</span>
        </div>
    )
}