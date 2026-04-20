import RecoveryVerifyNavbar from "@/features/auth/components/register/recovery/verify/top/RecoveryVerifyNavbar";



export default function TopNavigation() {
    return (
        <header className="w-full max-w-[1440px] min-h-[64px] h-auto bg-[#FFFFFF] p-8 flex items-center justify-between">
            <h1 className="text-[20px] font-bold text-[#0F172A]">Sanctuary</h1>

            <RecoveryVerifyNavbar />
        </header>
    )
}