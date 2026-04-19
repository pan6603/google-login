import PhoneCodeSelect from "@/features/auth/components/register/recovery/main/PhoneCodeSelect";


export default function PhoneInputField() {
    return (
        <div className="w-full max-w-[510px] min-h-[65px] h-auto flex items-center justify-between rounded-xl">
            <PhoneCodeSelect />
            
            <input
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full max-w-[402px] min-h-[65px] h-auto bg-[#F1F4FA] px-[24px] rounded-xl text-[18px] font-medium text-[#6B7280]"
            />
        </div>
    )
}
