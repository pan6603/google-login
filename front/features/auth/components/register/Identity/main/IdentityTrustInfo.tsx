import ShieldIcon from "@/shared/icons/ShieldIcon"
import TrustContent from "@/features/auth/components/register/Identity/main/TrustContent"


export default function IdentityTrustInfo() {
    return (
        <div className="w-full max-w-[389px] min-h-[44px] h-auto flex items-center gap-[16px]">
            <ShieldIcon />
            <TrustContent />
        </div>
    )
}