import IdentityLogo from "@/features/auth/components/register/Identity/sidebar/IdentityLogo";
import BrandText from "@/features/auth/components/register/Identity/sidebar/BrandText";

export default function IdentityBrand() {
    return (
        <div className="w-full max-w-[240px] min-h-[92px] h-auto">
            <div className="w-full max-w-[240px] min-h-[44px] h-auto flex items-center px-4 gap-[12px]">
                <IdentityLogo />
                <BrandText />
            </div>
        </div>
    )
}