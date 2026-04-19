import PhoneInputField from "@/features/auth/components/register/recovery/main/PhoneInputField";
import SendCodeButton from "@/features/auth/components/register/recovery/main/SendCodeButton";



export default function PhoneInputGroup() {
    return (
        <div className="w-full max-w-[510px] min-h-[141px] h-auto flex flex-col items-center justify-between">
            <PhoneInputField />
            <SendCodeButton />
        </div>
    )
}