import CompleteSetupButton from "@/features/auth/components/register/security/password-setup/CompleteSetupButton";
import BackButton from "@/features/auth/components/register/security/password-setup/BackButton";


export default function PasswordSetupActions() {
    return (
        <div className="w-full max-w-[446px] min-h-[136px] h-auto flex flex-col justify-between items-center">
            <CompleteSetupButton />
            <BackButton />
        </div>
    )
}