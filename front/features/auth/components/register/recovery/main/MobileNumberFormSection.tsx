import MoblieIcon from "@/shared/icons/MoblieIcon";
import PhoneInputGroup from "@/features/auth/components/register/recovery/main/PhoneInputGroup";



export default function MoblieNumberFormSection() {
    return (
        <form className="w-full max-w-[510px] min-h-[185px] h-auto flex flex-col justify-between">
            <div className="w-full max-w-[510px] min-h-[28px] h-auto flex items-center gap-[8px]">
                <MoblieIcon />
                <h3 className="text-[18px] font-bold text-[#181C20]">Mobile number</h3>
            </div>

            <PhoneInputGroup />
        </form>
    )
}