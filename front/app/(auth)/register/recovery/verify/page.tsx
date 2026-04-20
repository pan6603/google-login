import TopNavigation from "@/features/auth/components/register/recovery/verify/top/TopNavigation"
import MainContent from "@/features/auth/components/register/recovery/verify/main/MainContent"
import RecoveryVerifyFooter from "@/features/auth/components/register/recovery/verify/footer/RecoveryVerifyFooter"

export default function RecoveryVerifyPage() {
    return (
        <div className="w-full max-w-[1440px] min-h-[949px] h-auto flex flex-col items-center justify-between">
            <TopNavigation />
            <MainContent />
            <RecoveryVerifyFooter />
        </div>
    )
}