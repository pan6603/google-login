import IdentityBrand from "@/features/auth/components/register/Identity/sidebar/IdentityBrand";
import IdentityStepNavigation from "@/features/auth/components/register/Identity/sidebar/IdentityStepNavigation";
import SaveDraftButton from "@/features/auth/components/register/Identity/sidebar/SaveDraftButton";

export default function IdentitySidebar() {
    return (
        <aside className="w-full max-w-[288px] min-h-[900px] h-auto bg-[#F7F9FF] px-6 py-8 flex flex-col">
            <IdentityBrand />
            <IdentityStepNavigation />
            <SaveDraftButton />
        </aside>
    )
}