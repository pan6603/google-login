import PasswordSetupHeader from "@/features/auth/components/register/security/password-setup/PasswordSetupHeader";
import PasswordForm from "@/features/auth/components/register/security/password-setup/PasswordForm";
import PasswordTip from "@/features/auth/components/register/security/password-setup/PasswordTip";


export default function PasswordSetupForm() {
    return (
        <div className="w-full max-w-[512px] min-h-[758px] h-auto flex flex-col justify-between items-center">
            <PasswordSetupHeader />
            <PasswordForm />
            <PasswordTip />
        </div>
    )
}