import RecoveryVerifyNav from "@/features/auth/components/register/recovery/verify/top/RecoveryVerifyNav";
import RecoveryVerifyActions from "@/features/auth/components/register/recovery/verify/top/RecoveryVerifyActions";

export default function RecoveryVerifyNavbar() {
    return (
        <div className="w-full max-w-[405px] min-h-[24px] h-auto flex items-center justify-between">
            <RecoveryVerifyNav />
            <RecoveryVerifyActions />
        </div>
    )
}