import Badge from "@/shared/ui/badge/Badge"
import IdentityHeroTitle from "@/features/auth/components/register/Identity/main/IdentityHeroTitle"
import IdentityHeroDescription from "@/features/auth/components/register/Identity/main/IdentityHeroDescription"


export default function IdentityHeroContent() {
    return (
        <div className="w-full max-w-[389px] min-h-[324px] h-auto flex flex-col justify-between">
            <Badge 
                className="w-full max-w-[167px] min-h-[28px] h-auto bg-[#86F898] rounded-full text-xs font-bold text-[#00722F] px-3 py-1 flex items-center gap-[8px]"
                imageSrc="../../../images/auth/secure-badge-icon.svg"
                text="STEP 01: IDENTITY"
            />

            <IdentityHeroTitle />
            <IdentityHeroDescription />
        </div>
    )
}