import StatusBadge from "@/shared/ui/badge/StatusBadge"



export default function TopNavbar() {
    return (
        <div className="w-full max-w-[300px] min-h-[28px] h-auto flex items-center justify-between">
            <h1 className="text-[18px] font-extrabold text-[#181C20]">Digital Sanctuary</h1>

            <StatusBadge 
                className="w-full max-w-[133px] min-h-[28px] h-auto flex items-center justify-center gap-[4px] bg-[#86F898] rounded-full" 
                text="VERIFIED SESSION"
                spanClassName="text-[10px] font-bold text-[#00722F]"
            />
        </div>
    )
}