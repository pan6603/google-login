import ChevronDownIcon from "@/shared/icons/ChevronDownIcon";


export default function PhoneCodeSelect() {
    return (
        <button
            type="button"
            className="w-full max-w-[96px] min-h-[65px] h-auto bg-[#F1F4FA] flex items-center justify-center gap-5 rounded-xl"
            aria-label="select country code"
        >
            <span className="font-bold text-[#181C20] text-[16px]">+1</span>

            <ChevronDownIcon />
        </button>
    )
}
