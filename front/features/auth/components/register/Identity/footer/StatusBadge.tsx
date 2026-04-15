



export default function StatusBadge() {
    return (
        <div className="w-full max-w-[259px] min-h-[40px] h-auto bg-[#F1F4FA] rounded-full flex items-center justify-center gap-[12px]">
            <div className="w-full max-w-[8px] min-h-[8px] bg-[#006E2C] rounded-full"></div>
            <span className="text-xs font-bold text-[#424753]">Sanctuary Node: Active</span>
        </div>
    )
}