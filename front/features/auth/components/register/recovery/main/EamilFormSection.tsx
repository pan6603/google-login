import EmailIcon from "@/shared/icons/EmailIcon";
import EmailInputWithButton from "@/features/auth/components/register/recovery/main/EmailInputWithButton";




export default function EmailFormSection() {
    return (
        <form className="w-full max-w-[510px] min-h-[109px] h-auto flex flex-col justify-between">
            <div className="w-full max-w-[510px] min-h-[28px] h-auto flex items-center gap-[8px]">
                <EmailIcon />
                <h3 className="text-[18px] font-bold text-[#181C20]">Alternate email</h3>
            </div>

            <EmailInputWithButton />
        </form>
    )
}