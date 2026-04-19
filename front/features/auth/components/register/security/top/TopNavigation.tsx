import TopNavLogo from "@/features/auth/components/register/security/top/TopNavLogo";
import UserMenuIcon from "@/shared/icons/UserMenuIcon";


export default function TopNavigation() {
    return (
        <header className="w-full max-w-[1440px] min-h-[64px] h-auto bg-[#F7F9FF] px-8 py-4 flex justify-between items-center">
            <TopNavLogo />
            <UserMenuIcon />
        </header>
    )
}