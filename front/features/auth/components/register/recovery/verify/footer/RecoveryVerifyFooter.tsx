import RecoveryVerifyCopyright from "@/features/auth/components/register/recovery/verify/footer/RecoveryVerifyCopyright";
import RecoveryVerifyFooterLinks from "@/features/auth/components/register/recovery/verify/footer/RecoveryVerifyFooterLinks";


export default function RecoveryVerifyFooter() {
    return (
        <footer className="w-full max-w-[1440px] min-h-[83px] h-auto bg-[#FFFFFF] border-t border-[#EBEEF4] px-12 flex items-center justify-between">
            <RecoveryVerifyCopyright />
            <RecoveryVerifyFooterLinks />
        </footer>
    )
}