import SaveIcon from "@/shared/icons/SaveIcon";



export default function SaveDraftButton() {
    return (
        <div className="w-full max-w-[240px] min-h-[44px] h-auto flex items-center justify-center">
            <div className="w-full max-w-[208px] min-h-[44px] h-auto bg-[#E5E8EE] flex items-center justify-center gap-2 rounded-xl">
                <SaveIcon />
                <span className="text-[#424753] text-sm font-semibold">Save Draft</span>
            </div>
        </div>
    )
}