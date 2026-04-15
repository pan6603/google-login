import IdentitySubmitButton from "@/features/auth/components/register/Identity/main/form/IdentitySubmitButton";
import IdentitySwitchText from "@/features/auth/components/register/Identity/main/form/IdentitySwitchText";



export default function IdentityFormActions() {
    return (
        <div className="w-full max-w-[490px] min-h-[104px] h-auto flex flex-col justify-between">
            <IdentitySubmitButton />
            <IdentitySwitchText />
        </div>
    )
}