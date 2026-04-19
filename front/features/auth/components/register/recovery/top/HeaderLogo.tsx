import RecoveryLogoIcon from "@/shared/icons/RecoveryLogoIcon"




export default function HeaderLogo() {
    return (
        <div className="w-full max-w-[190px] min-h-[28px] h-auto flex items-center justify-between">
            <RecoveryLogoIcon />
            <span className="text-[20px] font-bold text-[#181C20]">Digital Sanctuary</span>
        </div>
    )
}