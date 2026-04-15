import IdentityHeader from "@/features/auth/components/register/Identity/main/IdentityHeader";
import IdentityContent from "@/features/auth/components/register/Identity/main/IdentityContent";
import IdentityFooter from "@/features/auth/components/register/Identity/main/IdentityFooter";

export default function IdentityMainContent() {
    return (
        <div className="w-full max-w-[1152px] min-h-[900px] h-auto">
            <IdentityHeader />
            <IdentityContent />
            <IdentityFooter />
        </div>
    )
}