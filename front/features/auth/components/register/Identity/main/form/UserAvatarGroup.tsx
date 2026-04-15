import UserAvatar from "@/shared/ui/avatar/UserAvatar";


export default function UserAvatarGroup() {
    return (
        <div className="w-full max-w-[80px] min-h-[32px] h-auto relative">
            <UserAvatar 
                className="w-full max-w-[32px] min-h-[32px] h-auto flex items-center justify-center absolute"
                imageSrc="../../../../../../../images/avatar/avatar-user-01.svg"
            />

            <UserAvatar 
                className="w-full max-w-[32px] min-h-[32px] h-auto flex items-center justify-center absolute left-[24px]"
                imageSrc="../../../../../../../images/avatar/avatar-user-02.svg"
            />

            <UserAvatar 
                className="w-full max-w-[32px] min-h-[32px] h-auto flex items-center justify-center absolute left-[48px]"
                imageSrc="../../../../../../../images/avatar/avatar-user-01.svg"
            />
        </div>
    )
}