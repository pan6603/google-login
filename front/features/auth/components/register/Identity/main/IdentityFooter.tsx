import TrustBadges from "@/features/auth/components/register/Identity/footer/TrustBadges";
import StatusBadge from "@/features/auth/components/register/Identity/footer/StatusBadge";


export default function IdentityFooter() {
    return (
        <div className="w-full max-w-[1152px] min-h-[136px] h-auto bg-[#F7F9FF] p-12 flex items-center justify-between">
            <TrustBadges />
            <StatusBadge />
        </div>
    )
}








