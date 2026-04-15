import HeaderNav from "@/features/auth/components/register/Identity/main/HeaderNav";
import StatusIndicator from "@/features/auth/components/register/Identity/main/StatusIndicator";

export default function IdentityHeader() {
    return (
        <div className="w-full max-w-[1152px] min-h-[72px] h-auto bg-[#F7F9FF] px-12 py-6 flex items-center justify-between">
            <HeaderNav />
            <StatusIndicator />
        </div>
    )
}