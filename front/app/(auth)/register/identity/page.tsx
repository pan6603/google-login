import IdentitySidebar from "@/features/auth/components/register/Identity/sidebar/IdentitySidebar";
import IdentityMainContent from "@/features/auth/components/register/Identity/main/IdentityMainContent";


export default function IdentityPage() {
    return (
        <div className="flex items-center justify-between">
            <IdentitySidebar />
            <IdentityMainContent />
        </div>
    )
}