import FirstNameField from "@/features/auth/components/register/Identity/main/form/FirstNameField";
import LastNameField from "@/features/auth/components/register/Identity/main/form/LastNameField";



export default function IdentityNameFields() {
    return (
        <div className="w-full max-w-[490px] min-h-[84px] h-auto flex items-center justify-between">
            <FirstNameField 
                label="First name"
                placeholder="e.g. Julian"
            />
            <LastNameField 
                label="Last name"
                placeholder="e.g. Thorne"
            />
        </div>
    )
}