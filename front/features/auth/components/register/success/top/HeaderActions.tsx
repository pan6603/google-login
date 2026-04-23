import PrimaryNavigation from "@/features/auth/components/register/success/top/PrimaryNavigation"
import UtilityActions from "@/features/auth/components/register/success/top/UtilityActions"


export default function HeaderActions() {
    return (
        <div className="w-full max-w-[325px] min-h-[24px] h-auto flex items-center justify-between">
            <PrimaryNavigation />
            <UtilityActions />
        </div>
    )
}