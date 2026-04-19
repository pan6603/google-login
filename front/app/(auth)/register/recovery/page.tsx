import TopNavigation from "@/features/auth/components/register/recovery/top/TopNavigation"
import MainContentArea from "@/features/auth/components/register/recovery/main/MainContentArea"
import RecoveryPageFooter from "@/features/auth/components/register/recovery/footer/RecoveryPageFooter"


export default function RecoveryPage() {
    return (
        <div className="w-full max-w-[1440px] min-h-[921px] h-auto flex flex-col justify-between items-center">
            <TopNavigation />
            <MainContentArea />
            <RecoveryPageFooter />
        </div>
    )
}