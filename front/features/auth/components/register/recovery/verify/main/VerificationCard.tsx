import RecoveryVerifyPageTitle from "@/features/auth/components/register/recovery/verify/main/RecoveryVerifyPageTitle";
import OTPVerificationForm from "@/features/auth/components/register/recovery/verify/main/OTPVerificationForm";
import SecurityMessage from "@/features/auth/components/register/recovery/verify/main/SecurityMessage";


export default function VerificationCard() {
    return (
        <div className="w-full max-w-[576px] min-h-[706px] h-auto flex flex-col items-center justify-between">
            <RecoveryVerifyPageTitle />
            <OTPVerificationForm />
            <SecurityMessage />
        </div>
    )
}