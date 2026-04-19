import HeaderLogo from "@/features/auth/components/register/recovery/top/HeaderLogo"
import UserAvatar from "@/shared/ui/avatar/UserAvatar"


export default function TopNavigation() {
    return (
        <header className="w-full max-w-[1440px] min-h-[64px] h-auto bg-[#F7F9FF] border-b border-[#EBEEF4] px-8 flex justify-between items-center">
            <HeaderLogo />
            <UserAvatar 
                className="w-full max-w-[32px] min-h-[32px] h-auto rounded-full flex justify-center items-center"
                imageSrc="../../../../../../images/avatar/avatar-user-04.svg"
            />
        </header>
    )
}