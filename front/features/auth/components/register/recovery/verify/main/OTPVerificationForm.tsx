import IllustrationIcon from "@/shared/icons/IllustrationIcon"
import VerificationCodeInput from "@/features/auth/components/register/recovery/verify/main/VerificationCodeInput"
import RecoveryVerifyPageCTAButton from "@/features/auth/components/register/recovery/verify/main/RecoveryVerifyPageCTAButton"
import HelperActions from "@/features/auth/components/register/recovery/verify/main/HelperActions"


export default function OTPVerificationForm() {
    return (
        <form className="w-full max-w-[576px] min-h-[470px] h-auto bg-[#FFFFFF] rounded-2xl flex items-center justify-center">
            <div className="w-full max-w-[478px] min-h-[364px] h-auto flex flex-col items-center justify-between">
                <IllustrationIcon />
                <VerificationCodeInput />
                <RecoveryVerifyPageCTAButton />
                <HelperActions />
            </div>
        </form>
    )
}