import IdentityHeroContent from "@/features/auth/components/register/Identity/main/IdentityHeroContent";
import IdentityTrustInfo from "@/features/auth/components/register/Identity/main/IdentityTrustInfo";


export default function IdentityHeroSection() {
    return (
        <div className="w-full max-w-[389px] min-h-[432px] h-auto flex flex-col justify-between">
            <IdentityHeroContent />
            <IdentityTrustInfo />
        </div>
    )
}