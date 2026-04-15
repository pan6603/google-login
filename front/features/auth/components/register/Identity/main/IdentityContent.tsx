import IdentityHeroSection from "@/features/auth/components/register/Identity/main/IdentityHeroSection";
import IdentityFormSection from "@/features/auth/components/register/Identity/main/IdentityFormSection";

export default function IdentityContent() {
    return (
        <div className="w-full max-w-[1152px] min-h-[692px] h-auto bg-[#F7F9FF] flex items-center justify-center">
            <div className="w-full max-w-[1024px] min-h-[505px] h-auto flex items-center justify-between">
                <IdentityHeroSection />
                <IdentityFormSection />
            </div>
        </div>
    )
}