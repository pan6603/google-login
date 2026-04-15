import UserAvatarGroup from "@/features/auth/components/register/Identity/main/form/UserAvatarGroup";



export default function IdentitySocialProof() {
    return (
        <div className="w-full max-w-[490px] min-h-[65px] h-auto flex items-end justify-between">
            <UserAvatarGroup />
            <span className="text-xs font-medium text-[#424753]">Joined 12,400+ secured users today</span>
        </div>
    )
}